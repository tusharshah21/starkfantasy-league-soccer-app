use starknet::{ContractAddress};

#[derive(Copy, Drop, Serde, PartialEq)]
#[dojo::model]
pub struct User {
    #[key]
    pub id: ContractAddress,
    pub username: felt252,
    pub tournaments_won: u16,
    pub created_at: u64,
    pub last_connection: u64,
}

#[generate_trait]
pub impl UserImpl of UserTrait {
    fn new(id: ContractAddress, username: felt252, created_at: u64) -> User {
        User {
            id,
            username,
            tournaments_won: 0,
            created_at,
            last_connection: created_at,
        }
    }

    fn update_last_connection(ref self: User, new_time: u64) {
        self.last_connection = new_time;
    }

    fn increment_tournaments_won(ref self: User) {
        self.tournaments_won = self.tournaments_won + 1;
    }
}
