use starknet::{ContractAddress};

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
