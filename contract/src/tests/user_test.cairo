#[cfg(test)]
mod tests {
    use super::*;
    use starknet::contract_address_const;
    use core::assert::*;

    #[test]
    fn test_user_initialization() {
        let user_id = contract_address_const::new(0x1234);
        let username = 'JohnDoe';
        let timestamp = 1710000000_u64;

        let user = User::new(user_id, username, timestamp);

        assert(user.id == user_id, 'User ID mismatch');
        assert(user.username == username, 'Username mismatch');
        assert(user.tournaments_won == 0, 'Tournaments won should be 0');
        assert(user.created_at == timestamp, 'Created_at mismatch');
        assert(user.last_connection == timestamp, 'Last connection mismatch');
    }

    #[test]
    fn test_update_last_connection() {
        let user_id = contract_address_const::new(0x1234);
        let user = User::new(user_id, 'User', 100);
        let updated = user.update_last_connection(200);

        assert(updated.last_connection == 200, 'Last connection should be updated');
        assert(updated.created_at == 100, 'Created_at should remain the same');
    }

    #[test]
    fn test_increment_tournaments_won() {
        let user_id = contract_address_const::new(0x1234);
        let user = User::new(user_id, 'Player', 123);
        let updated = user.increment_tournaments_won();

        assert(updated.tournaments_won == 1, 'Tournaments won should increment to 1');
    }
}