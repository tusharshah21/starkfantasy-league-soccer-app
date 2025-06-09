use starknet::{ContractAddress};


#[derive(Copy, Drop, Serde, PartialEq)]
#[dojo::model]
struct User {
    id: ContractAddress,
    username: felt252,
    tournaments_won: u16,
    created_at: u64,
    last_connection: u64,
}

impl User {
    fn new(id: ContractAddress, username: felt252, created_at: u64) -> User {
        User {
            id,
            username,
            tournaments_won: 0,
            created_at,
            last_connection: created_at,
        }
    }

    fn update_last_connection(ref self: User, new_time: u64) -> User {
        User {
            last_connection: new_time,
            ..*self
        }
    }

    fn increment_tournaments_won(ref self: User) -> User {
        User {
            tournaments_won: self.tournaments_won + 1,
            ..*self
        }
    }
}



#[derive(Copy, Drop, Serde, Debug)]
#[dojo::model]
pub struct Moves {
    #[key]
    pub player: ContractAddress,
    pub remaining: u8,
    pub last_direction: Option<Direction>,
    pub can_move: bool,
}

#[derive(Drop, Serde, Debug)]
#[dojo::model]
pub struct DirectionsAvailable {
    #[key]
    pub player: ContractAddress,
    pub directions: Array<Direction>,
}

#[derive(Copy, Drop, Serde, Debug)]
#[dojo::model]
pub struct Position {
    #[key]
    pub player: ContractAddress,
    pub vec: Vec2,
}

#[derive(Copy, Drop, Serde, Debug)]
#[dojo::model]
pub struct PositionCount {
    #[key]
    pub identity: ContractAddress,
    pub position: Span<(u8, u128)>,
}


#[derive(Serde, Copy, Drop, Introspect, PartialEq, Debug)]
pub enum Direction {
    Left,
    Right,
    Up,
    Down,
}


#[derive(Copy, Drop, Serde, IntrospectPacked, Debug)]
pub struct Vec2 {
    pub x: u32,
    pub y: u32,
}


impl DirectionIntoFelt252 of Into<Direction, felt252> {
    fn into(self: Direction) -> felt252 {
        match self {
            Direction::Left => 1,
            Direction::Right => 2,
            Direction::Up => 3,
            Direction::Down => 4,
        }
    }
}

impl OptionDirectionIntoFelt252 of Into<Option<Direction>, felt252> {
    fn into(self: Option<Direction>) -> felt252 {
        match self {
            Option::None => 0,
            Option::Some(d) => d.into(),
        }
    }
}

#[generate_trait]
impl Vec2Impl of Vec2Trait {
    fn is_zero(self: Vec2) -> bool {
        if self.x - self.y == 0 {
            return true;
        }
        false
    }

    fn is_equal(self: Vec2, b: Vec2) -> bool {
        self.x == b.x && self.y == b.y
    }
}

#[cfg(test)]
mod tests {
    use super::{Vec2, Vec2Trait};

    #[test]
    fn test_vec_is_zero() {
        assert(Vec2Trait::is_zero(Vec2 { x: 0, y: 0 }), 'not zero');
    }

    #[test]
    fn test_vec_is_equal() {
        let position = Vec2 { x: 420, y: 0 };
        assert(position.is_equal(Vec2 { x: 420, y: 0 }), 'not equal');
    }
}



#[derive(Copy, Drop, Serde, Debug)]
#[dojo::model]
pub struct Player {
    #[key]
    pub id: u64,
    pub external_id: felt252,
    pub name: felt252,
    pub position: u8,      // 1-GK, 2-DEF, 3-MID, 4-FWD
    pub real_team: felt252,
    pub image_url: felt252,
    pub country: felt252,
    pub price: u32,
    pub status: u8,        // 1-available, 2-injured, 3-suspended
    pub total_points: u32,
}



#[cfg(test)]
mod tests {
    use super::{Vec2, Vec2Trait, Team, Player, ContractAddress};

    #[test]
    fn test_vec_is_zero() {
        assert(Vec2Trait::is_zero(Vec2 { x: 0, y: 0 }), 'not zero');
    }

    #[test]
    fn test_vec_is_equal() {
        let position = Vec2 { x: 420, y: 0 };
        assert(position.is_equal(Vec2 { x: 420, y: 0 }), 'not equal');
    }

    #[test]
    fn test_team_initialization() {
        let team = Team {
            id: 1_u64,
            user_address: ContractAddress::from(0x1234_u32),
            tournament_id: 2_u64,
            name: 55555,
            created_at: 1717777777_u64,
            updated_at: 1717778888_u64,
            total_points: 0_u32,
            budget_remaining: 100_000_u32,
            formation: 44444,
        };
        assert(team.id == 1_u64, 'id mismatch');
        assert(team.user_address == ContractAddress::from(0x1234_u32), 'user_address mismatch');
        assert(team.tournament_id == 2_u64, 'tournament_id mismatch');
        assert(team.name == 55555, 'name mismatch');
        assert(team.created_at == 1717777777_u64, 'created_at mismatch');
        assert(team.updated_at == 1717778888_u64, 'updated_at mismatch');
        assert(team.total_points == 0_u32, 'total_points mismatch');
        assert(team.budget_remaining == 100_000_u32, 'budget_remaining mismatch');
        assert(team.formation == 44444, 'formation mismatch');
    }

    #[test]
    fn test_player_initialization() {
        let player = Player {
            id: 1_u64,
            external_id: 12345,
            name: 67890,
            position: 3_u8,
            real_team: 11111,
            image_url: 22222,
            country: 33333,
            price: 1000_u32,
            status: 1_u8,
            total_points: 0_u32,
        };
        assert(player.id == 1_u64, 'id mismatch');
        assert(player.external_id == 12345, 'external_id mismatch');
        assert(player.name == 67890, 'name mismatch');
        assert(player.position == 3_u8, 'position mismatch');
        assert(player.real_team == 11111, 'real_team mismatch');
        assert(player.image_url == 22222, 'image_url mismatch');
        assert(player.country == 33333, 'country mismatch');
        assert(player.price == 1000_u32, 'price mismatch');
        assert(player.status == 1_u8, 'status mismatch');
        assert(player.total_points == 0_u32, 'total_points mismatch');
    }
}



#[derive(Copy, Drop, Serde, Debug)]
#[dojo::model]
pub struct Team {
    #[key]
    pub id: u64,
    pub user_address: ContractAddress,
    pub tournament_id: u64,
    pub name: felt252,
    pub created_at: u64,
    pub updated_at: u64,
    pub total_points: u32,
    pub budget_remaining: u32,
    pub formation: felt252,
}

// ...existing code...

#[cfg(test)]
mod tests {
    use super::{Vec2, Vec2Trait, Team, ContractAddress};

    #[test]
    fn test_vec_is_zero() {
        assert(Vec2Trait::is_zero(Vec2 { x: 0, y: 0 }), 'not zero');
    }

    #[test]
    fn test_vec_is_equal() {
        let position = Vec2 { x: 420, y: 0 };
        assert(position.is_equal(Vec2 { x: 420, y: 0 }), 'not equal');
    }

    #[test]
    fn test_team_initialization() {
        let team = Team {
            id: 1_u64,
            user_address: ContractAddress::from(0x1234_u32),
            tournament_id: 2_u64,
            name: 55555,
            created_at: 1717777777_u64,
            updated_at: 1717778888_u64,
            total_points: 0_u32,
            budget_remaining: 100_000_u32,
            formation: 44444,
        };
        assert(team.id == 1_u64, 'id mismatch');
        assert(team.user_address == ContractAddress::from(0x1234_u32), 'user_address mismatch');
        assert(team.tournament_id == 2_u64, 'tournament_id mismatch');
        assert(team.name == 55555, 'name mismatch');
        assert(team.created_at == 1717777777_u64, 'created_at mismatch');
        assert(team.updated_at == 1717778888_u64, 'updated_at mismatch');
        assert(team.total_points == 0_u32, 'total_points mismatch');
        assert(team.budget_remaining == 100_000_u32, 'budget_remaining mismatch');
        assert(team.formation == 44444, 'formation mismatch');
    }
}