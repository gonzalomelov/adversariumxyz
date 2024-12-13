import { NextResponse } from "next/server";

// import { createGroupChat } from "../utils/xmtp";

// In-memory storage for games
const games: {
  id: number;
  target: string;
  targetFirstName: string;
  targetFriend: string;
  situation: string;
  situationAddress: string;
  privateInfo: string;
  groupTitle: string;
  groupImage: string;
  isCompleted: boolean;
  groupId: string;
}[] = [];

export async function POST(request: Request) {
  const {
    target,
    targetFirstName,
    targetFriend,
    situation,
    situationAddress,
    privateInfo,
    groupTitle,
    groupImage,
    creator,
  } = await request.json();

  try {
    // Create the chat in Base
    // TODO: Deploy
    const response = await fetch("http://localhost:3001/group-chats", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        target,
        targetFirstName,
        targetFriend,
        situation,
        situationAddress,
        privateInfo,
        groupTitle,
        groupImage,
        creator,
      }),
    });

    if (!response.ok) {
      const errorBody = await response.text();
      throw new Error(`HTTP error! status: ${response.status}, body: ${errorBody}`);
    }

    const groupChatData = await response.json();

    // const groupChatData = {
    //   message: "Group chat instance created",
    //   workerId: '123123213',
    //   groupId: '21312321',
    // };

    const newGame = {
      id: games.length + 1,
      target,
      targetFirstName,
      targetFriend,
      situation,
      situationAddress,
      privateInfo,
      groupTitle,
      groupImage,
      isCompleted: false,
      groupId: groupChatData.groupId,
    };
    games.push(newGame);

    return NextResponse.json(
      {
        ...newGame,
        podName: groupChatData.podName,
        message: groupChatData.message,
      },
      { status: 201 },
    );
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : String(error);
    console.error("Error creating group chat instance:", errorMessage);
    return NextResponse.json(
      {
        error: "Failed to create group chat instance",
        details: errorMessage,
      },
      { status: 500 },
    );
  }
}

export async function PUT(request: Request) {
  const {
    id,
    target,
    targetFirstName,
    targetFriend,
    situation,
    situationAddress,
    privateInfo,
    groupTitle,
    groupImage,
    isCompleted,
  } = await request.json();
  const gameIndex = games.findIndex(game => game.id === id);
  if (gameIndex === -1) {
    return NextResponse.json({ error: "Game not found" }, { status: 404 });
  }
  games[gameIndex] = {
    ...games[gameIndex],
    target,
    targetFirstName,
    targetFriend,
    situation,
    situationAddress,
    privateInfo,
    groupTitle,
    groupImage,
    isCompleted,
  };
  return NextResponse.json(games[gameIndex]);
}

export async function DELETE(request: Request) {
  const { id } = await request.json();
  const gameIndex = games.findIndex(game => game.id === id);
  if (gameIndex === -1) {
    return NextResponse.json({ error: "Game not found" }, { status: 404 });
  }
  games.splice(gameIndex, 1);
  return NextResponse.json({ message: "Game deleted successfully" });
}
