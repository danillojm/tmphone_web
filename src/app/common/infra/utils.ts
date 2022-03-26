export class Utils {
  public static unaccent(text: string) {
    return text.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
  }

  public static isNumber(value) {
    if (!value) {
      return false;
    }

    return !isNaN(value);
  }
}
