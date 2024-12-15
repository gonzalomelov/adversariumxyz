export interface Game {
  id: number;
  owner: string;
  responsesCount: bigint;
  max_iterations: number;
  is_finished: boolean;
  name: string;
  prompt: string;
  groupImage: string;
  isCompleted: boolean;
  groupId: string;
  prizePool: bigint;
}
