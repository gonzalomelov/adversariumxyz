import { NextResponse } from "next/server";

export async function POST(request: Request, { params }: { params: { id: string } }) {
  const { id } = params;
  const body = await request.json();

  console.log("Verification request received for game ID:", id, "with body:", body);

  try {
    // Forward the request to the other server
    const response = await fetch("http://localhost:3001/api/games/" + id + "/verify", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });

    if (!response.ok) {
      const errorBody = await response.text();
      throw new Error(`HTTP error! status: ${response.status}, body: ${errorBody}`);
    }

    const result = await response.json();

    // Forward the response from the other server
    return NextResponse.json(result, { status: response.status });
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : String(error);
    console.error("Error verifying game:", errorMessage);
    return NextResponse.json(
      {
        error: "Failed to verify game",
        details: errorMessage,
      },
      { status: 500 },
    );
  }
}
