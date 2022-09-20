import { ConfigService } from "@nestjs/config";
import { PassportStrategy } from "@nestjs/passport";
import { Strategy } from "passport-local";

export class GoogleStrategy extends PassportStrategy(Strategy, "google") {
  constructor(config: ConfigService) {
    super({
      clientID: config.get("GOOGLE_CLIENT_ID"),
      clientSecret: config.get("GOOGLE_SECRET"),
      callbackURL: "http://localhost:3000/google/redirect",
      scope: ["email", "profile"],
    });
  }

  async validate() {
    return "shen";
  }
}
