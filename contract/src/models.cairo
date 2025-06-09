use starknet::{ContractAddress};

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