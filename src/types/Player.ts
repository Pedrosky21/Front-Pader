export class Player{
  fullName:string
  elo:string
  distanceKm:string
  reasons:string
  compatibilitySumary:string
  invitationMessage:string

  constructor(data: any){
    this.fullName= data.player_name
    this.elo=data.elo
    this.distanceKm=data.distance_km
    this.reasons=data.reasons
    this.compatibilitySumary=data.compatibility_sumary
    this.invitationMessage= data.invitation_message
  }
}