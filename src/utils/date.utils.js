import Moment from "moment-timezone";

export const DateFormat = {
  YYYY_MM_DD: "YYYY-MM-DD",
  YYYY_MM_DD_hh_mm_ss: "YYYY-MM-DD hh:mm:ss",
  YYYY_MM_DD_HH_mm: "YYYY-MM-DD HH:mm",
  YYYY_MM_DD_HH_mm_ss_Z: "YYYY-MM-DDTHH:mm:ss.SSSZ",
  DD_MMM_YYYY_hh_mm_A: "DD MMM YYYY hh:mm A",
  DD_MMM_YYYY: "DD MMM YYYY",
  HH_mm: "HH:mm",
  YYYY: "YYYY",
  DD: "DD",
  DD_MM_YYYY: "DD-MM-YYYY",
  DD_MM_YYYY_SLASH: "DD/MM/YYYY",
  DD_MM_YYYY_HH_mm_SLASH: "DD/MM/YYYY HH:mm",
  DD_MM_YYYY_hh_mm_A_SLASH: "DD/MM/YYYY hh:mm A",
};

export class DateUtils {
  static format(date, format) {
    const moment = Moment(date);

    if (!moment.isValid()) {
      return "N/A";
    }

    return format ? moment.format(format) : moment.toISOString();
  }
}
