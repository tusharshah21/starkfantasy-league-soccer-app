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
