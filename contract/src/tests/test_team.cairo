mod tests {
    use starknet::{ContractAddress};
    use dojo_starter::models::team::Team;

    #[test]
    fn test_team_initialization() {
        let team = Team {
            id: 1_u64,
            user_address: 'USER'.try_into().unwrap(),
            tournament_id: 2_u64,
            name: 55555,
            created_at: 1717777777_u64,
            updated_at: 1717778888_u64,
            total_points: 0_u32,
            budget_remaining: 100_000_u32,
            formation: 44444,
        };
        assert(team.id == 1_u64, 'id mismatch');
        assert(team.user_address == 'USER'.try_into().unwrap(), 'user_address mismatch');
        assert(team.tournament_id == 2_u64, 'tournament_id mismatch');
        assert(team.name == 55555, 'name mismatch');
        assert(team.created_at == 1717777777_u64, 'created_at mismatch');
        assert(team.updated_at == 1717778888_u64, 'updated_at mismatch');
        assert(team.total_points == 0_u32, 'total_points mismatch');
        assert(team.budget_remaining == 100_000_u32, 'budget_remaining mismatch');
        assert(team.formation == 44444, 'formation mismatch');
    }
}
