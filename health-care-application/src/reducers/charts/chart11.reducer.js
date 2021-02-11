import {
  CHART11_ERROR,
  CHART11_FETCHING,
  CHART11_GET_SUCCRESS,
} from "../../constants";

const initialState = {
  results: {
    ชุมชนมณีแก้ว: {
      ElderBmi: 0,
      MaleBmi: 0,
      FemaleBmi: 0,
      Thin: {
      Sum: 0,
      Male: 0,
      Female: 0,
      PerSum: 0,
      PerMale: 0,
      PerFemale: 0
      },
      Normal: {
      Sum: 0,
      Male: 0,
      Female: 0,
      PerSum: 0,
      PerMale: 0,
      PerFemale: 0
      },
      Plump: {
      Sum: 0,
      Male: 0,
      Female: 0,
      PerSum: 0,
      PerMale: 0,
      PerFemale: 0
      },
      Fat: {
      Sum: 0,
      Male: 0,
      Female: 0,
      PerSum: 0,
      PerMale: 0,
      PerFemale: 0
      },
      VeryFat: {
      Sum: 0,
      Male: 0,
      Female: 0,
      PerSum: 0,
      PerMale: 0,
      PerFemale: 0
      }
      },
      ชุมชนดอนบน: {
      ElderBmi: 0,
      MaleBmi: 0,
      FemaleBmi: 0,
      Thin: {
      Sum: 0,
      Male: 0,
      Female: 0,
      PerSum: 0,
      PerMale: 0,
      PerFemale: 0
      },
      Normal: {
      Sum: 0,
      Male: 0,
      Female: 0,
      PerSum: 0,
      PerMale: 0,
      PerFemale: 0
      },
      Plump: {
      Sum: 0,
      Male: 0,
      Female: 0,
      PerSum: 0,
      PerMale: 0,
      PerFemale: 0
      },
      Fat: {
      Sum: 0,
      Male: 0,
      Female: 0,
      PerSum: 0,
      PerMale: 0,
      PerFemale: 0
      },
      VeryFat: {
      Sum: 0,
      Male: 0,
      Female: 0,
      PerSum: 0,
      PerMale: 0,
      PerFemale: 0
      }
      },
      ชุมชนบางแสนทาวเวอร์: {
      ElderBmi: 0,
      MaleBmi: 0,
      FemaleBmi: 0,
      Thin: {
      Sum: 0,
      Male: 0,
      Female: 0,
      PerSum: 0,
      PerMale: 0,
      PerFemale: 0
      },
      Normal: {
      Sum: 0,
      Male: 0,
      Female: 0,
      PerSum: 0,
      PerMale: 0,
      PerFemale: 0
      },
      Plump: {
      Sum: 0,
      Male: 0,
      Female: 0,
      PerSum: 0,
      PerMale: 0,
      PerFemale: 0
      },
      Fat: {
      Sum: 0,
      Male: 0,
      Female: 0,
      PerSum: 0,
      PerMale: 0,
      PerFemale: 0
      },
      VeryFat: {
      Sum: 0,
      Male: 0,
      Female: 0,
      PerSum: 0,
      PerMale: 0,
      PerFemale: 0
      }
      },
      ชุมชนตาลล้อม1: {
      ElderBmi: 0,
      MaleBmi: 0,
      FemaleBmi: 0,
      Thin: {
      Sum: 0,
      Male: 0,
      Female: 0,
      PerSum: 0,
      PerMale: 0,
      PerFemale: 0
      },
      Normal: {
      Sum: 0,
      Male: 0,
      Female: 0,
      PerSum: 0,
      PerMale: 0,
      PerFemale: 0
      },
      Plump: {
      Sum: 0,
      Male: 0,
      Female: 0,
      PerSum: 0,
      PerMale: 0,
      PerFemale: 0
      },
      Fat: {
      Sum: 0,
      Male: 0,
      Female: 0,
      PerSum: 0,
      PerMale: 0,
      PerFemale: 0
      },
      VeryFat: {
      Sum: 0,
      Male: 0,
      Female: 0,
      PerSum: 0,
      PerMale: 0,
      PerFemale: 0
      }
      },
      ชุมชนตาลล้อม2: {
      ElderBmi: 0,
      MaleBmi: 0,
      FemaleBmi: 0,
      Thin: {
      Sum: 0,
      Male: 0,
      Female: 0,
      PerSum: 0,
      PerMale: 0,
      PerFemale: 0
      },
      Normal: {
      Sum: 0,
      Male: 0,
      Female: 0,
      PerSum: 0,
      PerMale: 0,
      PerFemale: 0
      },
      Plump: {
      Sum: 0,
      Male: 0,
      Female: 0,
      PerSum: 0,
      PerMale: 0,
      PerFemale: 0
      },
      Fat: {
      Sum: 0,
      Male: 0,
      Female: 0,
      PerSum: 0,
      PerMale: 0,
      PerFemale: 0
      },
      VeryFat: {
      Sum: 0,
      Male: 0,
      Female: 0,
      PerSum: 0,
      PerMale: 0,
      PerFemale: 0
      }
      },
      ชุมชนบ้านเหมือง: {
      ElderBmi: 0,
      MaleBmi: 0,
      FemaleBmi: 0,
      Thin: {
      Sum: 0,
      Male: 0,
      Female: 0,
      PerSum: 0,
      PerMale: 0,
      PerFemale: 0
      },
      Normal: {
      Sum: 0,
      Male: 0,
      Female: 0,
      PerSum: 0,
      PerMale: 0,
      PerFemale: 0
      },
      Plump: {
      Sum: 0,
      Male: 0,
      Female: 0,
      PerSum: 0,
      PerMale: 0,
      PerFemale: 0
      },
      Fat: {
      Sum: 0,
      Male: 0,
      Female: 0,
      PerSum: 0,
      PerMale: 0,
      PerFemale: 0
      },
      VeryFat: {
      Sum: 0,
      Male: 0,
      Female: 0,
      PerSum: 0,
      PerMale: 0,
      PerFemale: 0
      }
      },
      ชุมชนพัฒนา2: {
      ElderBmi: 0,
      MaleBmi: 0,
      FemaleBmi: 0,
      Thin: {
      Sum: 0,
      Male: 0,
      Female: 0,
      PerSum: 0,
      PerMale: 0,
      PerFemale: 0
      },
      Normal: {
      Sum: 0,
      Male: 0,
      Female: 0,
      PerSum: 0,
      PerMale: 0,
      PerFemale: 0
      },
      Plump: {
      Sum: 0,
      Male: 0,
      Female: 0,
      PerSum: 0,
      PerMale: 0,
      PerFemale: 0
      },
      Fat: {
      Sum: 0,
      Male: 0,
      Female: 0,
      PerSum: 0,
      PerMale: 0,
      PerFemale: 0
      },
      VeryFat: {
      Sum: 0,
      Male: 0,
      Female: 0,
      PerSum: 0,
      PerMale: 0,
      PerFemale: 0
      }
      },
      ชุมชนดอนนารา: {
      ElderBmi: 0,
      MaleBmi: 0,
      FemaleBmi: 0,
      Thin: {
      Sum: 0,
      Male: 0,
      Female: 0,
      PerSum: 0,
      PerMale: 0,
      PerFemale: 0
      },
      Normal: {
      Sum: 0,
      Male: 0,
      Female: 0,
      PerSum: 0,
      PerMale: 0,
      PerFemale: 0
      },
      Plump: {
      Sum: 0,
      Male: 0,
      Female: 0,
      PerSum: 0,
      PerMale: 0,
      PerFemale: 0
      },
      Fat: {
      Sum: 0,
      Male: 0,
      Female: 0,
      PerSum: 0,
      PerMale: 0,
      PerFemale: 0
      },
      VeryFat: {
      Sum: 0,
      Male: 0,
      Female: 0,
      PerSum: 0,
      PerMale: 0,
      PerFemale: 0
      }
      },
      ชุมชนวัดกลางดอน: {
      ElderBmi: 0,
      MaleBmi: 0,
      FemaleBmi: 0,
      Thin: {
      Sum: 0,
      Male: 0,
      Female: 0,
      PerSum: 0,
      PerMale: 0,
      PerFemale: 0
      },
      Normal: {
      Sum: 0,
      Male: 0,
      Female: 0,
      PerSum: 0,
      PerMale: 0,
      PerFemale: 0
      },
      Plump: {
      Sum: 0,
      Male: 0,
      Female: 0,
      PerSum: 0,
      PerMale: 0,
      PerFemale: 0
      },
      Fat: {
      Sum: 0,
      Male: 0,
      Female: 0,
      PerSum: 0,
      PerMale: 0,
      PerFemale: 0
      },
      VeryFat: {
      Sum: 0,
      Male: 0,
      Female: 0,
      PerSum: 0,
      PerMale: 0,
      PerFemale: 0
      }
      },
      ชุมชนแสนสุข: {
      ElderBmi: 0,
      MaleBmi: 0,
      FemaleBmi: 0,
      Thin: {
      Sum: 0,
      Male: 0,
      Female: 0,
      PerSum: 0,
      PerMale: 0,
      PerFemale: 0
      },
      Normal: {
      Sum: 0,
      Male: 0,
      Female: 0,
      PerSum: 0,
      PerMale: 0,
      PerFemale: 0
      },
      Plump: {
      Sum: 0,
      Male: 0,
      Female: 0,
      PerSum: 0,
      PerMale: 0,
      PerFemale: 0
      },
      Fat: {
      Sum: 0,
      Male: 0,
      Female: 0,
      PerSum: 0,
      PerMale: 0,
      PerFemale: 0
      },
      VeryFat: {
      Sum: 0,
      Male: 0,
      Female: 0,
      PerSum: 0,
      PerMale: 0,
      PerFemale: 0
      }
      },
      ชุมชนมาบมะยม: {
      ElderBmi: 0,
      MaleBmi: 0,
      FemaleBmi: 0,
      Thin: {
      Sum: 0,
      Male: 0,
      Female: 0,
      PerSum: 0,
      PerMale: 0,
      PerFemale: 0
      },
      Normal: {
      Sum: 0,
      Male: 0,
      Female: 0,
      PerSum: 0,
      PerMale: 0,
      PerFemale: 0
      },
      Plump: {
      Sum: 0,
      Male: 0,
      Female: 0,
      PerSum: 0,
      PerMale: 0,
      PerFemale: 0
      },
      Fat: {
      Sum: 0,
      Male: 0,
      Female: 0,
      PerSum: 0,
      PerMale: 0,
      PerFemale: 0
      },
      VeryFat: {
      Sum: 0,
      Male: 0,
      Female: 0,
      PerSum: 0,
      PerMale: 0,
      PerFemale: 0
      }
      },
      ชุมชนท้ายตลาด: {
      ElderBmi: 0,
      MaleBmi: 0,
      FemaleBmi: 0,
      Thin: {
      Sum: 0,
      Male: 0,
      Female: 0,
      PerSum: 0,
      PerMale: 0,
      PerFemale: 0
      },
      Normal: {
      Sum: 0,
      Male: 0,
      Female: 0,
      PerSum: 0,
      PerMale: 0,
      PerFemale: 0
      },
      Plump: {
      Sum: 0,
      Male: 0,
      Female: 0,
      PerSum: 0,
      PerMale: 0,
      PerFemale: 0
      },
      Fat: {
      Sum: 0,
      Male: 0,
      Female: 0,
      PerSum: 0,
      PerMale: 0,
      PerFemale: 0
      },
      VeryFat: {
      Sum: 0,
      Male: 0,
      Female: 0,
      PerSum: 0,
      PerMale: 0,
      PerFemale: 0
      }
      },
      ชุมชนร่วมใจพัฒนา: {
      ElderBmi: 0,
      MaleBmi: 0,
      FemaleBmi: 0,
      Thin: {
      Sum: 0,
      Male: 0,
      Female: 0,
      PerSum: 0,
      PerMale: 0,
      PerFemale: 0
      },
      Normal: {
      Sum: 0,
      Male: 0,
      Female: 0,
      PerSum: 0,
      PerMale: 0,
      PerFemale: 0
      },
      Plump: {
      Sum: 0,
      Male: 0,
      Female: 0,
      PerSum: 0,
      PerMale: 0,
      PerFemale: 0
      },
      Fat: {
      Sum: 0,
      Male: 0,
      Female: 0,
      PerSum: 0,
      PerMale: 0,
      PerFemale: 0
      },
      VeryFat: {
      Sum: 0,
      Male: 0,
      Female: 0,
      PerSum: 0,
      PerMale: 0,
      PerFemale: 0
      }
      },
      ชุมชนบางแสนบน: {
      ElderBmi: 0,
      MaleBmi: 0,
      FemaleBmi: 0,
      Thin: {
      Sum: 0,
      Male: 0,
      Female: 0,
      PerSum: 0,
      PerMale: 0,
      PerFemale: 0
      },
      Normal: {
      Sum: 0,
      Male: 0,
      Female: 0,
      PerSum: 0,
      PerMale: 0,
      PerFemale: 0
      },
      Plump: {
      Sum: 0,
      Male: 0,
      Female: 0,
      PerSum: 0,
      PerMale: 0,
      PerFemale: 0
      },
      Fat: {
      Sum: 0,
      Male: 0,
      Female: 0,
      PerSum: 0,
      PerMale: 0,
      PerFemale: 0
      },
      VeryFat: {
      Sum: 0,
      Male: 0,
      Female: 0,
      PerSum: 0,
      PerMale: 0,
      PerFemale: 0
      }
      },
      ชุมชนหาดวอนนภา: {
      ElderBmi: 0,
      MaleBmi: 0,
      FemaleBmi: 0,
      Thin: {
      Sum: 0,
      Male: 0,
      Female: 0,
      PerSum: 0,
      PerMale: 0,
      PerFemale: 0
      },
      Normal: {
      Sum: 0,
      Male: 0,
      Female: 0,
      PerSum: 0,
      PerMale: 0,
      PerFemale: 0
      },
      Plump: {
      Sum: 0,
      Male: 0,
      Female: 0,
      PerSum: 0,
      PerMale: 0,
      PerFemale: 0
      },
      Fat: {
      Sum: 0,
      Male: 0,
      Female: 0,
      PerSum: 0,
      PerMale: 0,
      PerFemale: 0
      },
      VeryFat: {
      Sum: 0,
      Male: 0,
      Female: 0,
      PerSum: 0,
      PerMale: 0,
      PerFemale: 0
      }
      },
      ชุมชนบางเป้ง: {
      ElderBmi: 0,
      MaleBmi: 0,
      FemaleBmi: 0,
      Thin: {
      Sum: 0,
      Male: 0,
      Female: 0,
      PerSum: 0,
      PerMale: 0,
      PerFemale: 0
      },
      Normal: {
      Sum: 0,
      Male: 0,
      Female: 0,
      PerSum: 0,
      PerMale: 0,
      PerFemale: 0
      },
      Plump: {
      Sum: 0,
      Male: 0,
      Female: 0,
      PerSum: 0,
      PerMale: 0,
      PerFemale: 0
      },
      Fat: {
      Sum: 0,
      Male: 0,
      Female: 0,
      PerSum: 0,
      PerMale: 0,
      PerFemale: 0
      },
      VeryFat: {
      Sum: 0,
      Male: 0,
      Female: 0,
      PerSum: 0,
      PerMale: 0,
      PerFemale: 0
      }
      },
      ชุมชนหน้ามอ: {
      ElderBmi: 0,
      MaleBmi: 0,
      FemaleBmi: 0,
      Thin: {
      Sum: 0,
      Male: 0,
      Female: 0,
      PerSum: 0,
      PerMale: 0,
      PerFemale: 0
      },
      Normal: {
      Sum: 0,
      Male: 0,
      Female: 0,
      PerSum: 0,
      PerMale: 0,
      PerFemale: 0
      },
      Plump: {
      Sum: 0,
      Male: 0,
      Female: 0,
      PerSum: 0,
      PerMale: 0,
      PerFemale: 0
      },
      Fat: {
      Sum: 0,
      Male: 0,
      Female: 0,
      PerSum: 0,
      PerMale: 0,
      PerFemale: 0
      },
      VeryFat: {
      Sum: 0,
      Male: 0,
      Female: 0,
      PerSum: 0,
      PerMale: 0,
      PerFemale: 0
      }
      },
      ชุมชนโชคดี: {
      ElderBmi: 0,
      MaleBmi: 0,
      FemaleBmi: 0,
      Thin: {
      Sum: 0,
      Male: 0,
      Female: 0,
      PerSum: 0,
      PerMale: 0,
      PerFemale: 0
      },
      Normal: {
      Sum: 0,
      Male: 0,
      Female: 0,
      PerSum: 0,
      PerMale: 0,
      PerFemale: 0
      },
      Plump: {
      Sum: 0,
      Male: 0,
      Female: 0,
      PerSum: 0,
      PerMale: 0,
      PerFemale: 0
      },
      Fat: {
      Sum: 0,
      Male: 0,
      Female: 0,
      PerSum: 0,
      PerMale: 0,
      PerFemale: 0
      },
      VeryFat: {
      Sum: 0,
      Male: 0,
      Female: 0,
      PerSum: 0,
      PerMale: 0,
      PerFemale: 0
      }
      },
      ชุมชนสมใจนึก: {
      ElderBmi: 0,
      MaleBmi: 0,
      FemaleBmi: 0,
      Thin: {
      Sum: 0,
      Male: 0,
      Female: 0,
      PerSum: 0,
      PerMale: 0,
      PerFemale: 0
      },
      Normal: {
      Sum: 0,
      Male: 0,
      Female: 0,
      PerSum: 0,
      PerMale: 0,
      PerFemale: 0
      },
      Plump: {
      Sum: 0,
      Male: 0,
      Female: 0,
      PerSum: 0,
      PerMale: 0,
      PerFemale: 0
      },
      Fat: {
      Sum: 0,
      Male: 0,
      Female: 0,
      PerSum: 0,
      PerMale: 0,
      PerFemale: 0
      },
      VeryFat: {
      Sum: 0,
      Male: 0,
      Female: 0,
      PerSum: 0,
      PerMale: 0,
      PerFemale: 0
      }
      },
      ชุมชนหน้าเทศบาล: {
      ElderBmi: 0,
      MaleBmi: 0,
      FemaleBmi: 0,
      Thin: {
      Sum: 0,
      Male: 0,
      Female: 0,
      PerSum: 0,
      PerMale: 0,
      PerFemale: 0
      },
      Normal: {
      Sum: 0,
      Male: 0,
      Female: 0,
      PerSum: 0,
      PerMale: 0,
      PerFemale: 0
      },
      Plump: {
      Sum: 0,
      Male: 0,
      Female: 0,
      PerSum: 0,
      PerMale: 0,
      PerFemale: 0
      },
      Fat: {
      Sum: 0,
      Male: 0,
      Female: 0,
      PerSum: 0,
      PerMale: 0,
      PerFemale: 0
      },
      VeryFat: {
      Sum: 0,
      Male: 0,
      Female: 0,
      PerSum: 0,
      PerMale: 0,
      PerFemale: 0
      }
      },
      ชุมชนวัดแสนสุข: {
      ElderBmi: 0,
      MaleBmi: 0,
      FemaleBmi: 0,
      Thin: {
      Sum: 0,
      Male: 0,
      Female: 0,
      PerSum: 0,
      PerMale: 0,
      PerFemale: 0
      },
      Normal: {
      Sum: 0,
      Male: 0,
      Female: 0,
      PerSum: 0,
      PerMale: 0,
      PerFemale: 0
      },
      Plump: {
      Sum: 0,
      Male: 0,
      Female: 0,
      PerSum: 0,
      PerMale: 0,
      PerFemale: 0
      },
      Fat: {
      Sum: 0,
      Male: 0,
      Female: 0,
      PerSum: 0,
      PerMale: 0,
      PerFemale: 0
      },
      VeryFat: {
      Sum: 0,
      Male: 0,
      Female: 0,
      PerSum: 0,
      PerMale: 0,
      PerFemale: 0
      }
      },
      ชุมชนมุขแสนเจริญ1: {
      ElderBmi: 0,
      MaleBmi: 0,
      FemaleBmi: 0,
      Thin: {
      Sum: 0,
      Male: 0,
      Female: 0,
      PerSum: 0,
      PerMale: 0,
      PerFemale: 0
      },
      Normal: {
      Sum: 0,
      Male: 0,
      Female: 0,
      PerSum: 0,
      PerMale: 0,
      PerFemale: 0
      },
      Plump: {
      Sum: 0,
      Male: 0,
      Female: 0,
      PerSum: 0,
      PerMale: 0,
      PerFemale: 0
      },
      Fat: {
      Sum: 0,
      Male: 0,
      Female: 0,
      PerSum: 0,
      PerMale: 0,
      PerFemale: 0
      },
      VeryFat: {
      Sum: 0,
      Male: 0,
      Female: 0,
      PerSum: 0,
      PerMale: 0,
      PerFemale: 0
      }
      },
      ชุมชนมุขแสนเจริญ2: {
      ElderBmi: 0,
      MaleBmi: 0,
      FemaleBmi: 0,
      Thin: {
      Sum: 0,
      Male: 0,
      Female: 0,
      PerSum: 0,
      PerMale: 0,
      PerFemale: 0
      },
      Normal: {
      Sum: 0,
      Male: 0,
      Female: 0,
      PerSum: 0,
      PerMale: 0,
      PerFemale: 0
      },
      Plump: {
      Sum: 0,
      Male: 0,
      Female: 0,
      PerSum: 0,
      PerMale: 0,
      PerFemale: 0
      },
      Fat: {
      Sum: 0,
      Male: 0,
      Female: 0,
      PerSum: 0,
      PerMale: 0,
      PerFemale: 0
      },
      VeryFat: {
      Sum: 0,
      Male: 0,
      Female: 0,
      PerSum: 0,
      PerMale: 0,
      PerFemale: 0
      }
      },
      ชุมชนเขาสามมุข: {
      ElderBmi: 0,
      MaleBmi: 0,
      FemaleBmi: 0,
      Thin: {
      Sum: 0,
      Male: 0,
      Female: 0,
      PerSum: 0,
      PerMale: 0,
      PerFemale: 0
      },
      Normal: {
      Sum: 0,
      Male: 0,
      Female: 0,
      PerSum: 0,
      PerMale: 0,
      PerFemale: 0
      },
      Plump: {
      Sum: 0,
      Male: 0,
      Female: 0,
      PerSum: 0,
      PerMale: 0,
      PerFemale: 0
      },
      Fat: {
      Sum: 0,
      Male: 0,
      Female: 0,
      PerSum: 0,
      PerMale: 0,
      PerFemale: 0
      },
      VeryFat: {
      Sum: 0,
      Male: 0,
      Female: 0,
      PerSum: 0,
      PerMale: 0,
      PerFemale: 0
      }
      },
      ชุมชนบ้านแหลมแท่น: {
      ElderBmi: 0,
      MaleBmi: 0,
      FemaleBmi: 0,
      Thin: {
      Sum: 0,
      Male: 0,
      Female: 0,
      PerSum: 0,
      PerMale: 0,
      PerFemale: 0
      },
      Normal: {
      Sum: 0,
      Male: 0,
      Female: 0,
      PerSum: 0,
      PerMale: 0,
      PerFemale: 0
      },
      Plump: {
      Sum: 0,
      Male: 0,
      Female: 0,
      PerSum: 0,
      PerMale: 0,
      PerFemale: 0
      },
      Fat: {
      Sum: 0,
      Male: 0,
      Female: 0,
      PerSum: 0,
      PerMale: 0,
      PerFemale: 0
      },
      VeryFat: {
      Sum: 0,
      Male: 0,
      Female: 0,
      PerSum: 0,
      PerMale: 0,
      PerFemale: 0
      }
      }
  },
  isFetching: null,
  isError: null,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case CHART11_GET_SUCCRESS:
      return { results: payload, isFetching: false, isError: false };
    case CHART11_FETCHING:
      return { ...state, isFetching: true, isError: false };
    case CHART11_ERROR:
      return { ...state, isFetching: false, isError: true };
    default:
      return state;
  }
};
