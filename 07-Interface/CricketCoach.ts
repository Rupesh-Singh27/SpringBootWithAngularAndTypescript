import { Coach } from "./Coach";

export class CricketCoach implements Coach {
    public getDailyWorkout(): string {
        return "Work on your leg spin delivery";
    }
}