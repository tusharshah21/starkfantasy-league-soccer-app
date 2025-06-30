pub mod systems {
    pub mod actions;
}

pub mod models {
    pub mod player;
    pub mod team;
    pub mod user;
}

#[cfg(test)]
pub mod tests {
    mod test_player;
    mod test_team;
    mod test_user;
}
