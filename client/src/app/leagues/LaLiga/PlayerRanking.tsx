 interface Player {
    username: string;
    points: number;
    reward: number;
    avatar: string;
  }
  
   const allPlayers: Player[] = [
    { username: "Player A", points: 13.67, reward: 1000, avatar: "/user-1.png" },
    { username: "Player B", points: 10.21, reward: 750, avatar: "/user-2.png" },
    { username: "Player C", points: 9.89, reward: 500, avatar: "/user-3.png" },
    { username: "Player D", points: 9.23, reward: 250, avatar: "/user-4.png" },
    { username: "Player E", points: 8.641, reward: 100, avatar: "/user-5.png" },
    { username: "Player F", points: 7.918, reward: 0, avatar: "/user-6.png" },
  ];
  
   const sortedPlayers = [...allPlayers].sort((a, b) => b.points - a.points);
   const top3 = sortedPlayers.slice(0, 3);
   const remaining = sortedPlayers.slice(3);
   const podiumOrder = [top3[1], top3[0], top3[2]];
  
   const formatPoints = (points: number) =>
    points.toLocaleString("en-US", {
      minimumFractionDigits: 3,
      maximumFractionDigits: 3,
    });
  
   const formatReward = (reward: number) =>
    reward === 0 ? "-" : `${reward.toLocaleString()} STRK`;