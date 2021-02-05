import {
  CHART4_ERROR,
  CHART4_FETCHING,
  CHART4_GET_SUCCRESS,
} from "../../constants";

const initialState = {
  results: {
    ชุมชนมณีแก้ว: {
      Summary: 0,
      Alone: 0,//ไม่มี
      NotAlone: {
        SumNotAlone: 0,//มี
        Child: 0,
        SonInLaw: 0,
        GrandChild: 0,
        Sibling: 0,
        Parent: 0,
        Partner: 0,
        Other: 0,
      },
      PerAlone: 0,
      PerNotAlone: {
        PerSumNotAlone: 0,
        PerChild: 0,
        PerSonInLaw: 0,
        PerGrandChild: 0,
        PerSibling: 0,
        PerParent: 0,
        PerPartner: 0,
        PerOther: 0,
      },
    },
    ชุมชนดอนบน: {
      Summary: 0,
      Alone: 0,
      NotAlone: {
        SumNotAlone: 0,
        Child: 0,
        SonInLaw: 0,
        GrandChild: 0,
        Sibling: 0,
        Parent: 0,
        Partner: 0,
        Other: 0,
      },
      PerAlone: 0,
      PerNotAlone: {
        PerSumNotAlone: 0,
        PerChild: 0,
        PerSonInLaw: 0,
        PerGrandChild: 0,
        PerSibling: 0,
        PerParent: 0,
        PerPartner: 0,
        PerOther: 0,
      },
    },
    ชุมชนบางแสนทาวเวอร์: {
      Summary: 0,
      Alone: 0,
      NotAlone: {
        SumNotAlone: 0,
        Child: 0,
        SonInLaw: 0,
        GrandChild: 0,
        Sibling: 0,
        Parent: 0,
        Partner: 0,
        Other: 0,
      },
      PerAlone: 0,
      PerNotAlone: {
        PerSumNotAlone: 0,
        PerChild: 0,
        PerSonInLaw: 0,
        PerGrandChild: 0,
        PerSibling: 0,
        PerParent: 0,
        PerPartner: 0,
        PerOther: 0,
      },
    },
    ชุมชนตาลล้อม1: {
      Summary: 0,
      Alone: 0,
      NotAlone: {
        SumNotAlone: 0,
        Child: 0,
        SonInLaw: 0,
        GrandChild: 0,
        Sibling: 0,
        Parent: 0,
        Partner: 0,
        Other: 0,
      },
      PerAlone: 0,
      PerNotAlone: {
        PerSumNotAlone: 0,
        PerChild: 0,
        PerSonInLaw: 0,
        PerGrandChild: 0,
        PerSibling: 0,
        PerParent: 0,
        PerPartner: 0,
        PerOther: 0,
      },
    },
    ชุมชนตาลล้อม2: {
      Summary: 0,
      Alone: 0,
      NotAlone: {
        SumNotAlone: 0,
        Child: 0,
        SonInLaw: 0,
        GrandChild: 0,
        Sibling: 0,
        Parent: 0,
        Partner: 0,
        Other: 0,
      },
      PerAlone: 0,
      PerNotAlone: {
        PerSumNotAlone: 0,
        PerChild: 0,
        PerSonInLaw: 0,
        PerGrandChild: 0,
        PerSibling: 0,
        PerParent: 0,
        PerPartner: 0,
        PerOther: 0,
      },
    },
    ชุมชนบ้านเหมือง: {
      Summary: 0,
      Alone: 0,
      NotAlone: {
        SumNotAlone: 0,
        Child: 0,
        SonInLaw: 0,
        GrandChild: 0,
        Sibling: 0,
        Parent: 0,
        Partner: 0,
        Other: 0,
      },
      PerAlone: 0,
      PerNotAlone: {
        PerSumNotAlone: 0,
        PerChild: 0,
        PerSonInLaw: 0,
        PerGrandChild: 0,
        PerSibling: 0,
        PerParent: 0,
        PerPartner: 0,
        PerOther: 0,
      },
    },
    ชุมชนพัฒนา2: {
      Summary: 0,
      Alone: 0,
      NotAlone: {
        SumNotAlone: 0,
        Child: 0,
        SonInLaw: 0,
        GrandChild: 0,
        Sibling: 0,
        Parent: 0,
        Partner: 0,
        Other: 0,
      },
      PerAlone: 0,
      PerNotAlone: {
        PerSumNotAlone: 0,
        PerChild: 0,
        PerSonInLaw: 0,
        PerGrandChild: 0,
        PerSibling: 0,
        PerParent: 0,
        PerPartner: 0,
        PerOther: 0,
      },
    },
    ชุมชนดอนนารา: {
      Summary: 0,
      Alone: 0,
      NotAlone: {
        SumNotAlone: 0,
        Child: 0,
        SonInLaw: 0,
        GrandChild: 0,
        Sibling: 0,
        Parent: 0,
        Partner: 0,
        Other: 0,
      },
      PerAlone: 0,
      PerNotAlone: {
        PerSumNotAlone: 0,
        PerChild: 0,
        PerSonInLaw: 0,
        PerGrandChild: 0,
        PerSibling: 0,
        PerParent: 0,
        PerPartner: 0,
        PerOther: 0,
      },
    },
    ชุมชนวัดกลางดอน: {
      Summary: 0,
      Alone: 0,
      NotAlone: {
        SumNotAlone: 0,
        Child: 0,
        SonInLaw: 0,
        GrandChild: 0,
        Sibling: 0,
        Parent: 0,
        Partner: 0,
        Other: 0,
      },
      PerAlone: 0,
      PerNotAlone: {
        PerSumNotAlone: 0,
        PerChild: 0,
        PerSonInLaw: 0,
        PerGrandChild: 0,
        PerSibling: 0,
        PerParent: 0,
        PerPartner: 0,
        PerOther: 0,
      },
    },
    ชุมชนแสนสุข: {
      Summary: 0,
      Alone: 0,
      NotAlone: {
        SumNotAlone: 0,
        Child: 0,
        SonInLaw: 0,
        GrandChild: 0,
        Sibling: 0,
        Parent: 0,
        Partner: 0,
        Other: 0,
      },
      PerAlone: 0,
      PerNotAlone: {
        PerSumNotAlone: 0,
        PerChild: 0,
        PerSonInLaw: 0,
        PerGrandChild: 0,
        PerSibling: 0,
        PerParent: 0,
        PerPartner: 0,
        PerOther: 0,
      },
    },
    ชุมชนมาบมะยม: {
      Summary: 0,
      Alone: 0,
      NotAlone: {
        SumNotAlone: 0,
        Child: 0,
        SonInLaw: 0,
        GrandChild: 0,
        Sibling: 0,
        Parent: 0,
        Partner: 0,
        Other: 0,
      },
      PerAlone: 0,
      PerNotAlone: {
        PerSumNotAlone: 0,
        PerChild: 0,
        PerSonInLaw: 0,
        PerGrandChild: 0,
        PerSibling: 0,
        PerParent: 0,
        PerPartner: 0,
        PerOther: 0,
      },
    },
    ชุมชนท้ายตลาด: {
      Summary: 0,
      Alone: 0,
      NotAlone: {
        SumNotAlone: 0,
        Child: 0,
        SonInLaw: 0,
        GrandChild: 0,
        Sibling: 0,
        Parent: 0,
        Partner: 0,
        Other: 0,
      },
      PerAlone: 0,
      PerNotAlone: {
        PerSumNotAlone: 0,
        PerChild: 0,
        PerSonInLaw: 0,
        PerGrandChild: 0,
        PerSibling: 0,
        PerParent: 0,
        PerPartner: 0,
        PerOther: 0,
      },
    },
    ชุมชนร่วมใจพัฒนา: {
      Summary: 0,
      Alone: 0,
      NotAlone: {
        SumNotAlone: 0,
        Child: 0,
        SonInLaw: 0,
        GrandChild: 0,
        Sibling: 0,
        Parent: 0,
        Partner: 0,
        Other: 0,
      },
      PerAlone: 0,
      PerNotAlone: {
        PerSumNotAlone: 0,
        PerChild: 0,
        PerSonInLaw: 0,
        PerGrandChild: 0,
        PerSibling: 0,
        PerParent: 0,
        PerPartner: 0,
        PerOther: 0,
      },
    },
    ชุมชนบางแสนบน: {
      Summary: 0,
      Alone: 0,
      NotAlone: {
        SumNotAlone: 0,
        Child: 0,
        SonInLaw: 0,
        GrandChild: 0,
        Sibling: 0,
        Parent: 0,
        Partner: 0,
        Other: 0,
      },
      PerAlone: 0,
      PerNotAlone: {
        PerSumNotAlone: 0,
        PerChild: 0,
        PerSonInLaw: 0,
        PerGrandChild: 0,
        PerSibling: 0,
        PerParent: 0,
        PerPartner: 0,
        PerOther: 0,
      },
    },
    ชุมชนหาดวอนนภา: {
      Summary: 0,
      Alone:0,
      NotAlone: {
        SumNotAlone: 0,
        Child: 0,
        SonInLaw: 0,
        GrandChild: 0,
        Sibling: 0,
        Parent: 0,
        Partner: 0,
        Other: 0,
      },
      PerAlone: 0,
      PerNotAlone: {
        PerSumNotAlone: 0,
        PerChild: 0,
        PerSonInLaw: 0,
        PerGrandChild: 0,
        PerSibling: 0,
        PerParent: 0,
        PerPartner: 0,
        PerOther: 0,
      },
    },
    ชุมชนบางเป้ง: {
      Summary: 0,
      Alone: 0,
      NotAlone: {
        SumNotAlone: 0,
        Child: 0,
        SonInLaw: 0,
        GrandChild: 0,
        Sibling: 0,
        Parent: 0,
        Partner: 0,
        Other: 0,
      },
      PerAlone: 0,
      PerNotAlone: {
        PerSumNotAlone: 0,
        PerChild: 0,
        PerSonInLaw: 0,
        PerGrandChild: 0,
        PerSibling: 0,
        PerParent: 0,
        PerPartner: 0,
        PerOther: 0,
      },
    },
    ชุมชนหน้ามอ: {
      Summary: 0,
      Alone: 0,
      NotAlone: {
        SumNotAlone: 0,
        Child: 0,
        SonInLaw: 0,
        GrandChild: 0,
        Sibling: 0,
        Parent: 0,
        Partner: 0,
        Other: 0,
      },
      PerAlone: 0,
      PerNotAlone: {
        PerSumNotAlone: 0,
        PerChild: 0,
        PerSonInLaw: 0,
        PerGrandChild: 0,
        PerSibling: 0,
        PerParent: 0,
        PerPartner: 0,
        PerOther: 0,
      },
    },
    ชุมชนโชคดี: {
      Summary: 0,
      Alone: 0,
      NotAlone: {
        SumNotAlone: 0,
        Child: 0,
        SonInLaw: 0,
        GrandChild: 0,
        Sibling: 0,
        Parent: 0,
        Partner: 0,
        Other: 0,
      },
      PerAlone: 0,
      PerNotAlone: {
        PerSumNotAlone: 0,
        PerChild: 0,
        PerSonInLaw: 0,
        PerGrandChild: 0,
        PerSibling: 0,
        PerParent: 0,
        PerPartner: 0,
        PerOther: 0,
      },
    },
    ชุมชนสมใจนึก: {
      Summary: 0,
      Alone: 0,
      NotAlone: {
        SumNotAlone: 0,
        Child: 0,
        SonInLaw: 0,
        GrandChild: 0,
        Sibling: 0,
        Parent: 0,
        Partner: 0,
        Other: 0,
      },
      PerAlone: 0,
      PerNotAlone: {
        PerSumNotAlone: 0,
        PerChild: 0,
        PerSonInLaw: 0,
        PerGrandChild: 0,
        PerSibling: 0,
        PerParent: 0,
        PerPartner: 0,
        PerOther: 0,
      },
    },
    ชุมชนหน้าเทศบาล: {
      Summary: 0,
      Alone: 0,
      NotAlone: {
        SumNotAlone: 0,
        Child: 0,
        SonInLaw: 0,
        GrandChild: 0,
        Sibling: 0,
        Parent: 0,
        Partner: 0,
        Other: 0,
      },
      PerAlone: 0,
      PerNotAlone: {
        PerSumNotAlone: 0,
        PerChild: 0,
        PerSonInLaw: 0,
        PerGrandChild: 0,
        PerSibling: 0,
        PerParent: 0,
        PerPartner: 0,
        PerOther: 0,
      },
    },
    ชุมชนวัดแสนสุข: {
      Summary: 0,
      Alone: 0,
      NotAlone: {
        SumNotAlone: 0,
        Child: 0,
        SonInLaw: 0,
        GrandChild: 0,
        Sibling: 0,
        Parent: 0,
        Partner: 0,
        Other: 0,
      },
      PerAlone: 0,
      PerNotAlone: {
        PerSumNotAlone: 0,
        PerChild: 0,
        PerSonInLaw: 0,
        PerGrandChild: 0,
        PerSibling: 0,
        PerParent: 0,
        PerPartner: 0,
        PerOther: 0,
      },
    },
    ชุมชนมุขแสนเจริญ1: {
      Summary: 0,
      Alone: 0,
      NotAlone: {
        SumNotAlone: 0,
        Child: 0,
        SonInLaw: 0,
        GrandChild: 0,
        Sibling: 0,
        Parent: 0,
        Partner: 0,
        Other: 0,
      },
      PerAlone: 0,
      PerNotAlone: {
        PerSumNotAlone: 0,
        PerChild: 0,
        PerSonInLaw: 0,
        PerGrandChild: 0,
        PerSibling: 0,
        PerParent: 0,
        PerPartner: 0,
        PerOther: 0,
      },
    },
    ชุมชนมุขแสนเจริญ2: {
      Summary:0,
      Alone: 0,
      NotAlone: {
        SumNotAlone: 0,
        Child: 0,
        SonInLaw: 0,
        GrandChild: 0,
        Sibling: 0,
        Parent: 0,
        Partner: 0,
        Other: 0,
      },
      PerAlone: 0,
      PerNotAlone: {
        PerSumNotAlone: 0,
        PerChild: 0,
        PerSonInLaw: 0,
        PerGrandChild: 0,
        PerSibling: 0,
        PerParent: 0,
        PerPartner: 0,
        PerOther: 0,
      },
    },
    ชุมชนเขาสามมุข: {
      Summary: 0,
      Alone: 0,
      NotAlone: {
        SumNotAlone: 0,
        Child: 0,
        SonInLaw: 0,
        GrandChild: 0,
        Sibling: 0,
        Parent: 0,
        Partner: 0,
        Other: 0,
      },
      PerAlone: 0,
      PerNotAlone: {
        PerSumNotAlone: 0,
        PerChild: 0,
        PerSonInLaw: 0,
        PerGrandChild: 0,
        PerSibling: 0,
        PerParent: 0,
        PerPartner: 0,
        PerOther: 0,
      },
    },
    ชุมชนบ้านแหลมแท่น: {
      Summary: 0,
      Alone: 0,
      NotAlone: {
        SumNotAlone: 0,
        Child: 0,
        SonInLaw: 0,
        GrandChild: 0,
        Sibling: 0,
        Parent: 0,
        Partner: 0,
        Other: 0,
      },
      PerAlone: 0,
      PerNotAlone: {
        PerSumNotAlone: 0,
        PerChild: 0,
        PerSonInLaw: 0,
        PerGrandChild: 0,
        PerSibling: 0,
        PerParent: 0,
        PerPartner: 0,
        PerOther: 0,
      },
    },
  },
  isFetching: false,
  isError: false,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case CHART4_GET_SUCCRESS:
      return { results: payload, isFetching: false, isError: false };
    case CHART4_FETCHING:
      return { ...state, isFetching: true, isError: false };
    case CHART4_ERROR:
      return { ...state, isFetching: false, isError: true };
    default:
      return state;
  }
};
