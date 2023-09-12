import { Coach } from "./Coach";

export class GolfCoach implements Coach {
    public getDailyWorkout(): string{
        return `Hit 100 golf balls daily`;
    }
}