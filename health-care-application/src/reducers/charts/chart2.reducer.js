import {
  CHART2_ERROR,
  CHART2_FETCHING,
  CHART2_GET_SUCCRESS,
} from "../../constants";

const initialState = {
  results: {
    ชุมชนมณีแก้ว: {
      g6064: {
        Elder: 0,
        ElderMale: 0,
        ElderFemale: 0,
      },
      g6569: {
        Elder: 0,
        ElderMale: 0,
        ElderFemale: 0,
      },
      g7074: {
        Elder: 0,
        ElderMale: 0,
        ElderFemale: 0,
      },
      g7579: {
        Elder: 0,
        ElderMale: 0,
        ElderFemale: 0,
      },
      g8084: {
        Elder: 0,
        ElderMale: 0,
        ElderFemale: 0,
      },
      g8589: {
        Elder: 0,
        ElderMale: 0,
        ElderFemale: 0,
      },
      g9094: {
        Elder: 0,
        ElderMale: 0,
        ElderFemale: 0,
      },
      g95: {
        Elder: 0,
        ElderMale: 0,
        ElderFemale: 0,
      },
      summary: {
        Elder: 0,
        ElderMale: 0,
        ElderFemale: 0,
      },
    },
    ชุมชนดอนบน: {
      g6064: {
        Elder: 0,
        ElderMale: 0,
        ElderFemale: 0,
      },
      g6569: {
        Elder: 0,
        ElderMale: 0,
        ElderFemale: 0,
      },
      g7074: {
        Elder: 0,
        ElderMale: 0,
        ElderFemale: 0,
      },
      g7579: {
        Elder: 0,
        ElderMale: 0,
        ElderFemale: 0,
      },
      g8084: {
        Elder: 0,
        ElderMale: 0,
        ElderFemale: 0,
      },
      g8589: {
        Elder: 0,
        ElderMale: 0,
        ElderFemale: 0,
      },
      g9094: {
        Elder: 0,
        ElderMale: 0,
        ElderFemale: 0,
      },
      g95: {
        Elder: 0,
        ElderMale: 0,
        ElderFemale: 0,
      },
      summary: {
        Elder: 0,
        ElderMale: 0,
        ElderFemale: 0,
      },
    },
    ชุมชนบางแสนทาวเวอร์: {
      g6064: {
        Elder: 0,
        ElderMale: 0,
        ElderFemale: 0,
      },
      g6569: {
        Elder: 0,
        ElderMale: 0,
        ElderFemale: 0,
      },
      g7074: {
        Elder: 0,
        ElderMale: 0,
        ElderFemale: 0,
      },
      g7579: {
        Elder: 0,
        ElderMale: 0,
        ElderFemale: 0,
      },
      g8084: {
        Elder: 0,
        ElderMale: 0,
        ElderFemale: 0,
      },
      g8589: {
        Elder: 0,
        ElderMale: 0,
        ElderFemale: 0,
      },
      g9094: {
        Elder: 0,
        ElderMale: 0,
        ElderFemale: 0,
      },
      g95: {
        Elder: 0,
        ElderMale: 0,
        ElderFemale: 0,
      },
      summary: {
        Elder: 0,
        ElderMale: 0,
        ElderFemale: 0,
      },
    },
    ชุมชนตาลล้อม1: {
      g6064: {
        Elder: 0,
        ElderMale: 0,
        ElderFemale: 0,
      },
      g6569: {
        Elder: 0,
        ElderMale: 0,
        ElderFemale: 0,
      },
      g7074: {
        Elder: 0,
        ElderMale: 0,
        ElderFemale: 0,
      },
      g7579: {
        Elder: 0,
        ElderMale: 0,
        ElderFemale: 0,
      },
      g8084: {
        Elder: 0,
        ElderMale: 0,
        ElderFemale: 0,
      },
      g8589: {
        Elder: 0,
        ElderMale: 0,
        ElderFemale: 0,
      },
      g9094: {
        Elder: 0,
        ElderMale: 0,
        ElderFemale: 0,
      },
      g95: {
        Elder: 0,
        ElderMale: 0,
        ElderFemale: 0,
      },
      summary: {
        Elder: 0,
        ElderMale: 0,
        ElderFemale: 0,
      },
    },
    ชุมชนตาลล้อม2: {
      g6064: {
        Elder: 0,
        ElderMale: 0,
        ElderFemale: 0,
      },
      g6569: {
        Elder: 0,
        ElderMale: 0,
        ElderFemale: 0,
      },
      g7074: {
        Elder: 0,
        ElderMale: 0,
        ElderFemale: 0,
      },
      g7579: {
        Elder: 0,
        ElderMale: 0,
        ElderFemale: 0,
      },
      g8084: {
        Elder: 0,
        ElderMale: 0,
        ElderFemale: 0,
      },
      g8589: {
        Elder: 0,
        ElderMale: 0,
        ElderFemale: 0,
      },
      g9094: {
        Elder: 0,
        ElderMale: 0,
        ElderFemale: 0,
      },
      g95: {
        Elder: 0,
        ElderMale: 0,
        ElderFemale: 0,
      },
      summary: {
        Elder: 0,
        ElderMale: 0,
        ElderFemale: 0,
      },
    },
    ชุมชนบ้านเหมือง: {
      g6064: {
        Elder: 0,
        ElderMale: 0,
        ElderFemale: 0,
      },
      g6569: {
        Elder: 0,
        ElderMale: 0,
        ElderFemale: 0,
      },
      g7074: {
        Elder: 0,
        ElderMale: 0,
        ElderFemale: 0,
      },
      g7579: {
        Elder: 0,
        ElderMale: 0,
        ElderFemale: 0,
      },
      g8084: {
        Elder: 0,
        ElderMale: 0,
        ElderFemale: 0,
      },
      g8589: {
        Elder: 0,
        ElderMale: 0,
        ElderFemale: 0,
      },
      g9094: {
        Elder: 0,
        ElderMale: 0,
        ElderFemale: 0,
      },
      g95: {
        Elder: 0,
        ElderMale: 0,
        ElderFemale: 0,
      },
      summary: {
        Elder: 0,
        ElderMale: 0,
        ElderFemale: 0,
      },
    },
    ชุมชนพัฒนา2: {
      g6064: {
        Elder: 0,
        ElderMale: 0,
        ElderFemale: 0,
      },
      g6569: {
        Elder: 0,
        ElderMale: 0,
        ElderFemale: 0,
      },
      g7074: {
        Elder: 0,
        ElderMale: 0,
        ElderFemale: 0,
      },
      g7579: {
        Elder: 0,
        ElderMale: 0,
        ElderFemale: 0,
      },
      g8084: {
        Elder: 0,
        ElderMale: 0,
        ElderFemale: 0,
      },
      g8589: {
        Elder: 0,
        ElderMale: 0,
        ElderFemale: 0,
      },
      g9094: {
        Elder: 0,
        ElderMale: 0,
        ElderFemale: 0,
      },
      g95: {
        Elder: 0,
        ElderMale: 0,
        ElderFemale: 0,
      },
      summary: {
        Elder: 0,
        ElderMale: 0,
        ElderFemale: 0,
      },
    },
    ชุมชนดอนนารา: {
      g6064: {
        Elder: 0,
        ElderMale: 0,
        ElderFemale: 0,
      },
      g6569: {
        Elder: 0,
        ElderMale: 0,
        ElderFemale: 0,
      },
      g7074: {
        Elder: 0,
        ElderMale: 0,
        ElderFemale: 0,
      },
      g7579: {
        Elder: 0,
        ElderMale: 0,
        ElderFemale: 0,
      },
      g8084: {
        Elder: 0,
        ElderMale: 0,
        ElderFemale: 0,
      },
      g8589: {
        Elder: 0,
        ElderMale: 0,
        ElderFemale: 0,
      },
      g9094: {
        Elder: 0,
        ElderMale: 0,
        ElderFemale: 0,
      },
      g95: {
        Elder: 0,
        ElderMale: 0,
        ElderFemale: 0,
      },
      summary: {
        Elder: 0,
        ElderMale: 0,
        ElderFemale: 0,
      },
    },
    ชุมชนวัดกลางดอน: {
      g6064: {
        Elder: 0,
        ElderMale: 0,
        ElderFemale: 0,
      },
      g6569: {
        Elder: 0,
        ElderMale: 0,
        ElderFemale: 0,
      },
      g7074: {
        Elder: 0,
        ElderMale: 0,
        ElderFemale: 0,
      },
      g7579: {
        Elder: 0,
        ElderMale: 0,
        ElderFemale: 0,
      },
      g8084: {
        Elder: 0,
        ElderMale: 0,
        ElderFemale: 0,
      },
      g8589: {
        Elder: 0,
        ElderMale: 0,
        ElderFemale: 0,
      },
      g9094: {
        Elder: 0,
        ElderMale: 0,
        ElderFemale: 0,
      },
      g95: {
        Elder: 0,
        ElderMale: 0,
        ElderFemale: 0,
      },
      summary: {
        Elder: 0,
        ElderMale: 0,
        ElderFemale: 0,
      },
    },
    ชุมชนแสนสุข: {
      g6064: {
        Elder: 0,
        ElderMale: 0,
        ElderFemale: 0,
      },
      g6569: {
        Elder: 0,
        ElderMale: 0,
        ElderFemale: 0,
      },
      g7074: {
        Elder: 0,
        ElderMale: 0,
        ElderFemale: 0,
      },
      g7579: {
        Elder: 0,
        ElderMale: 0,
        ElderFemale: 0,
      },
      g8084: {
        Elder: 0,
        ElderMale: 0,
        ElderFemale: 0,
      },
      g8589: {
        Elder: 0,
        ElderMale: 0,
        ElderFemale: 0,
      },
      g9094: {
        Elder: 0,
        ElderMale: 0,
        ElderFemale: 0,
      },
      g95: {
        Elder: 0,
        ElderMale: 0,
        ElderFemale: 0,
      },
      summary: {
        Elder: 0,
        ElderMale: 0,
        ElderFemale: 0,
      },
    },
    ชุมชนมาบมะยม: {
      g6064: {
        Elder: 0,
        ElderMale: 0,
        ElderFemale: 0,
      },
      g6569: {
        Elder: 0,
        ElderMale: 0,
        ElderFemale: 0,
      },
      g7074: {
        Elder: 0,
        ElderMale: 0,
        ElderFemale: 0,
      },
      g7579: {
        Elder: 0,
        ElderMale: 0,
        ElderFemale: 0,
      },
      g8084: {
        Elder: 0,
        ElderMale: 0,
        ElderFemale: 0,
      },
      g8589: {
        Elder: 0,
        ElderMale: 0,
        ElderFemale: 0,
      },
      g9094: {
        Elder: 0,
        ElderMale: 0,
        ElderFemale: 0,
      },
      g95: {
        Elder: 0,
        ElderMale: 0,
        ElderFemale: 0,
      },
      summary: {
        Elder: 0,
        ElderMale: 0,
        ElderFemale: 0,
      },
    },
    ชุมชนท้ายตลาด: {
      g6064: {
        Elder: 0,
        ElderMale: 0,
        ElderFemale: 0,
      },
      g6569: {
        Elder: 0,
        ElderMale: 0,
        ElderFemale: 0,
      },
      g7074: {
        Elder: 0,
        ElderMale: 0,
        ElderFemale: 0,
      },
      g7579: {
        Elder: 0,
        ElderMale: 0,
        ElderFemale: 0,
      },
      g8084: {
        Elder: 0,
        ElderMale: 0,
        ElderFemale: 0,
      },
      g8589: {
        Elder: 0,
        ElderMale: 0,
        ElderFemale: 0,
      },
      g9094: {
        Elder: 0,
        ElderMale: 0,
        ElderFemale: 0,
      },
      g95: {
        Elder: 0,
        ElderMale: 0,
        ElderFemale: 0,
      },
      summary: {
        Elder: 0,
        ElderMale: 0,
        ElderFemale: 0,
      },
    },
    ชุมชนร่วมใจพัฒนา: {
      g6064: {
        Elder: 0,
        ElderMale: 0,
        ElderFemale: 0,
      },
      g6569: {
        Elder: 0,
        ElderMale: 0,
        ElderFemale: 0,
      },
      g7074: {
        Elder: 0,
        ElderMale: 0,
        ElderFemale: 0,
      },
      g7579: {
        Elder: 0,
        ElderMale: 0,
        ElderFemale: 0,
      },
      g8084: {
        Elder: 0,
        ElderMale: 0,
        ElderFemale: 0,
      },
      g8589: {
        Elder: 0,
        ElderMale: 0,
        ElderFemale: 0,
      },
      g9094: {
        Elder: 0,
        ElderMale: 0,
        ElderFemale: 0,
      },
      g95: {
        Elder: 0,
        ElderMale: 0,
        ElderFemale: 0,
      },
      summary: {
        Elder: 0,
        ElderMale: 0,
        ElderFemale: 0,
      },
    },
    ชุมชนบางแสนบน: {
      g6064: {
        Elder: 0,
        ElderMale: 0,
        ElderFemale: 0,
      },
      g6569: {
        Elder: 0,
        ElderMale: 0,
        ElderFemale: 0,
      },
      g7074: {
        Elder: 0,
        ElderMale: 0,
        ElderFemale: 0,
      },
      g7579: {
        Elder: 0,
        ElderMale: 0,
        ElderFemale: 0,
      },
      g8084: {
        Elder: 0,
        ElderMale: 0,
        ElderFemale: 0,
      },
      g8589: {
        Elder: 0,
        ElderMale: 0,
        ElderFemale: 0,
      },
      g9094: {
        Elder: 0,
        ElderMale: 0,
        ElderFemale: 0,
      },
      g95: {
        Elder: 0,
        ElderMale: 0,
        ElderFemale: 0,
      },
      summary: {
        Elder: 0,
        ElderMale: 0,
        ElderFemale: 0,
      },
    },
    ชุมชนหาดวอนนภา: {
      g6064: {
        Elder: 0,
        ElderMale: 0,
        ElderFemale: 0,
      },
      g6569: {
        Elder: 0,
        ElderMale: 0,
        ElderFemale: 0,
      },
      g7074: {
        Elder: 0,
        ElderMale: 0,
        ElderFemale: 0,
      },
      g7579: {
        Elder: 0,
        ElderMale: 0,
        ElderFemale: 0,
      },
      g8084: {
        Elder: 0,
        ElderMale: 0,
        ElderFemale: 0,
      },
      g8589: {
        Elder: 0,
        ElderMale: 0,
        ElderFemale: 0,
      },
      g9094: {
        Elder: 0,
        ElderMale: 0,
        ElderFemale: 0,
      },
      g95: {
        Elder: 0,
        ElderMale: 0,
        ElderFemale: 0,
      },
      summary: {
        Elder: 0,
        ElderMale: 0,
        ElderFemale: 0,
      },
    },
    ชุมชนบางเป้ง: {
      g6064: {
        Elder: 0,
        ElderMale: 0,
        ElderFemale: 0,
      },
      g6569: {
        Elder: 0,
        ElderMale: 0,
        ElderFemale: 0,
      },
      g7074: {
        Elder: 0,
        ElderMale: 0,
        ElderFemale: 0,
      },
      g7579: {
        Elder: 0,
        ElderMale: 0,
        ElderFemale: 0,
      },
      g8084: {
        Elder: 0,
        ElderMale: 0,
        ElderFemale: 0,
      },
      g8589: {
        Elder: 0,
        ElderMale: 0,
        ElderFemale: 0,
      },
      g9094: {
        Elder: 0,
        ElderMale: 0,
        ElderFemale: 0,
      },
      g95: {
        Elder: 0,
        ElderMale: 0,
        ElderFemale: 0,
      },
      summary: {
        Elder: 0,
        ElderMale: 0,
        ElderFemale: 0,
      },
    },
    ชุมชนหน้ามอ: {
      g6064: {
        Elder: 0,
        ElderMale: 0,
        ElderFemale: 0,
      },
      g6569: {
        Elder: 0,
        ElderMale: 0,
        ElderFemale: 0,
      },
      g7074: {
        Elder: 0,
        ElderMale: 0,
        ElderFemale: 0,
      },
      g7579: {
        Elder: 0,
        ElderMale: 0,
        ElderFemale: 0,
      },
      g8084: {
        Elder: 0,
        ElderMale: 0,
        ElderFemale: 0,
      },
      g8589: {
        Elder: 0,
        ElderMale: 0,
        ElderFemale: 0,
      },
      g9094: {
        Elder: 0,
        ElderMale: 0,
        ElderFemale: 0,
      },
      g95: {
        Elder: 0,
        ElderMale: 0,
        ElderFemale: 0,
      },
      summary: {
        Elder: 0,
        ElderMale: 0,
        ElderFemale: 0,
      },
    },
    ชุมชนโชคดี: {
      g6064: {
        Elder: 0,
        ElderMale: 0,
        ElderFemale: 0,
      },
      g6569: {
        Elder: 0,
        ElderMale: 0,
        ElderFemale: 0,
      },
      g7074: {
        Elder: 0,
        ElderMale: 0,
        ElderFemale: 0,
      },
      g7579: {
        Elder: 0,
        ElderMale: 0,
        ElderFemale: 0,
      },
      g8084: {
        Elder: 0,
        ElderMale: 0,
        ElderFemale: 0,
      },
      g8589: {
        Elder: 0,
        ElderMale: 0,
        ElderFemale: 0,
      },
      g9094: {
        Elder: 0,
        ElderMale: 0,
        ElderFemale: 0,
      },
      g95: {
        Elder: 0,
        ElderMale: 0,
        ElderFemale: 0,
      },
      summary: {
        Elder: 0,
        ElderMale: 0,
        ElderFemale: 0,
      },
    },
    ชุมชนสมใจนึก: {
      g6064: {
        Elder: 0,
        ElderMale: 0,
        ElderFemale: 0,
      },
      g6569: {
        Elder: 0,
        ElderMale: 0,
        ElderFemale: 0,
      },
      g7074: {
        Elder: 0,
        ElderMale: 0,
        ElderFemale: 0,
      },
      g7579: {
        Elder: 0,
        ElderMale: 0,
        ElderFemale: 0,
      },
      g8084: {
        Elder: 0,
        ElderMale: 0,
        ElderFemale: 0,
      },
      g8589: {
        Elder: 0,
        ElderMale: 0,
        ElderFemale: 0,
      },
      g9094: {
        Elder: 0,
        ElderMale: 0,
        ElderFemale: 0,
      },
      g95: {
        Elder: 0,
        ElderMale: 0,
        ElderFemale: 0,
      },
      summary: {
        Elder: 0,
        ElderMale: 0,
        ElderFemale: 0,
      },
    },
    ชุมชนหน้าเทศบาล: {
      g6064: {
        Elder: 0,
        ElderMale: 0,
        ElderFemale: 0,
      },
      g6569: {
        Elder: 0,
        ElderMale: 0,
        ElderFemale: 0,
      },
      g7074: {
        Elder: 0,
        ElderMale: 0,
        ElderFemale: 0,
      },
      g7579: {
        Elder: 0,
        ElderMale: 0,
        ElderFemale: 0,
      },
      g8084: {
        Elder: 0,
        ElderMale: 0,
        ElderFemale: 0,
      },
      g8589: {
        Elder: 0,
        ElderMale: 0,
        ElderFemale: 0,
      },
      g9094: {
        Elder: 0,
        ElderMale: 0,
        ElderFemale: 0,
      },
      g95: {
        Elder: 0,
        ElderMale: 0,
        ElderFemale: 0,
      },
      summary: {
        Elder: 0,
        ElderMale: 0,
        ElderFemale: 0,
      },
    },
    ชุมชนวัดแสนสุข: {
      g6064: {
        Elder: 0,
        ElderMale: 0,
        ElderFemale: 0,
      },
      g6569: {
        Elder: 0,
        ElderMale: 0,
        ElderFemale: 0,
      },
      g7074: {
        Elder: 0,
        ElderMale: 0,
        ElderFemale: 0,
      },
      g7579: {
        Elder: 0,
        ElderMale: 0,
        ElderFemale: 0,
      },
      g8084: {
        Elder: 0,
        ElderMale: 0,
        ElderFemale: 0,
      },
      g8589: {
        Elder: 0,
        ElderMale: 0,
        ElderFemale: 0,
      },
      g9094: {
        Elder: 0,
        ElderMale: 0,
        ElderFemale: 0,
      },
      g95: {
        Elder: 0,
        ElderMale: 0,
        ElderFemale: 0,
      },
      summary: {
        Elder: 0,
        ElderMale: 0,
        ElderFemale: 0,
      },
    },
    ชุมชนมุขแสนเจริญ1: {
      g6064: {
        Elder: 0,
        ElderMale: 0,
        ElderFemale: 0,
      },
      g6569: {
        Elder: 0,
        ElderMale: 0,
        ElderFemale: 0,
      },
      g7074: {
        Elder: 0,
        ElderMale: 0,
        ElderFemale: 0,
      },
      g7579: {
        Elder: 0,
        ElderMale: 0,
        ElderFemale: 0,
      },
      g8084: {
        Elder: 0,
        ElderMale: 0,
        ElderFemale: 0,
      },
      g8589: {
        Elder: 0,
        ElderMale: 0,
        ElderFemale: 0,
      },
      g9094: {
        Elder: 0,
        ElderMale: 0,
        ElderFemale: 0,
      },
      g95: {
        Elder: 0,
        ElderMale: 0,
        ElderFemale: 0,
      },
      summary: {
        Elder: 0,
        ElderMale: 0,
        ElderFemale: 0,
      },
    },
    ชุมชนมุขแสนเจริญ2: {
      g6064: {
        Elder: 0,
        ElderMale: 0,
        ElderFemale: 0,
      },
      g6569: {
        Elder: 0,
        ElderMale: 0,
        ElderFemale: 0,
      },
      g7074: {
        Elder: 0,
        ElderMale: 0,
        ElderFemale: 0,
      },
      g7579: {
        Elder: 0,
        ElderMale: 0,
        ElderFemale: 0,
      },
      g8084: {
        Elder: 0,
        ElderMale: 0,
        ElderFemale: 0,
      },
      g8589: {
        Elder: 0,
        ElderMale: 0,
        ElderFemale: 0,
      },
      g9094: {
        Elder: 0,
        ElderMale: 0,
        ElderFemale: 0,
      },
      g95: {
        Elder: 0,
        ElderMale: 0,
        ElderFemale: 0,
      },
      summary: {
        Elder: 0,
        ElderMale: 0,
        ElderFemale: 0,
      },
    },
    ชุมชนเขาสามมุข: {
      g6064: {
        Elder: 0,
        ElderMale: 0,
        ElderFemale: 0,
      },
      g6569: {
        Elder: 0,
        ElderMale: 0,
        ElderFemale: 0,
      },
      g7074: {
        Elder: 0,
        ElderMale: 0,
        ElderFemale: 0,
      },
      g7579: {
        Elder: 0,
        ElderMale: 0,
        ElderFemale: 0,
      },
      g8084: {
        Elder: 0,
        ElderMale: 0,
        ElderFemale: 0,
      },
      g8589: {
        Elder: 0,
        ElderMale: 0,
        ElderFemale: 0,
      },
      g9094: {
        Elder: 0,
        ElderMale: 0,
        ElderFemale: 0,
      },
      g95: {
        Elder: 0,
        ElderMale: 0,
        ElderFemale: 0,
      },
      summary: {
        Elder: 0,
        ElderMale: 0,
        ElderFemale: 0,
      },
    },
    ชุมชนบ้านแหลมแท่น: {
      g6064: {
        Elder: 0,
        ElderMale: 0,
        ElderFemale: 0,
      },
      g6569: {
        Elder: 0,
        ElderMale: 0,
        ElderFemale: 0,
      },
      g7074: {
        Elder: 0,
        ElderMale: 0,
        ElderFemale: 0,
      },
      g7579: {
        Elder: 0,
        ElderMale: 0,
        ElderFemale: 0,
      },
      g8084: {
        Elder: 0,
        ElderMale: 0,
        ElderFemale: 0,
      },
      g8589: {
        Elder: 0,
        ElderMale: 0,
        ElderFemale: 0,
      },
      g9094: {
        Elder: 0,
        ElderMale: 0,
        ElderFemale: 0,
      },
      g95: {
        Elder: 0,
        ElderMale: 0,
        ElderFemale: 0,
      },
      summary: {
        Elder: 0,
        ElderMale: 0,
        ElderFemale: 0,
      },
    },
  },
  isFetching: null,
  isError: null,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case CHART2_GET_SUCCRESS:
      return { results: payload, isFetching: false, isError: false };
    case CHART2_FETCHING:
      return { ...state, isFetching: true, isError: false };
    case CHART2_ERROR:
      return { ...state, isFetching: false, isError: true };
    default:
      return state;
  }
};
