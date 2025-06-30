mod tests {
    use dojo_starter::models::user::{User, UserTrait};
    use starknet::contract_address_const;

    #[test]
    fn test_user_initialization() {
        let user_id = 'USER'.try_into().unwrap();
        let username = 'JohnDoe';
        let timestamp = 1710000000_u64;

        let user = UserTrait::new(user_id, username, timestamp);

        assert(user.id == user_id, 'User ID mismatch');
        assert(user.username == username, 'Username mismatch');
        assert(user.tournaments_won == 0, 'Tournaments won should be 0');
        assert(user.created_at == timestamp, 'Created_at mismatch');
        assert(user.last_connection == timestamp, 'Last connection mismatch');
    }

    #[test]
    fn test_update_last_connection() {
        let user_id = 'USER'.try_into().unwrap();
        let mut user = UserTrait::new(user_id, 'User', 100);
        user.update_last_connection(200);

        assert(user.last_connection == 200, 'Wrong last connection');
        assert(user.created_at == 100, 'Wrong created_at');
    }

    #[test]
    fn test_increment_tournaments_won() {
        let user_id = 'USER'.try_into().unwrap();
        let mut user = UserTrait::new(user_id, 'Player', 123);
        user.increment_tournaments_won();

        assert(user.tournaments_won == 1, 'Wrong tournaments');
    }
}
