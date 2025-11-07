export class Player{
  fullName:string
  elo:string
  distanceKm:string
  reasons:string[]
  compatibilitySumary:string
  invitationMessage:string

  constructor(data: any){
    this.fullName= data.name
    this.elo=data.elo
    this.distanceKm=data.distance_km
    this.reasons=data.reasons
    this.compatibilitySumary="El jugador esta muy activo ultimamente, acepta muchos partidos"
    this.invitationMessage= "Te invito a jugar a Padel"
  }
}