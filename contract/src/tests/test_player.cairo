mod tests {
    use dojo_starter::models::player::Player;

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
