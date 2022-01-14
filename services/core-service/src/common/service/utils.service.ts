export class UtilsService {
  static dateToUnix(date: Date): number {
    return Math.floor(date.getTime() / 1000);
  }
}
