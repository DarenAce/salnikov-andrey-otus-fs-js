export const MIN_DURATION = 1

export const MAX_DURATION = 7

export const MIN_DIFFICULTY = 1

export const MAX_DIFFICULTY = 10

export const DIFFICULTIES = {
  ADD: [
    {
      numberOfOperands: 2,
      range: {
        min: 1,
        max: 9
      }
    },
    {
      numberOfOperands: 3,
      range: {
        min: 1,
        max: 9
      }
    },
    {
      numberOfOperands: 2,
      range: {
        min: 10,
        max: 99
      }
    },
    {
      numberOfOperands: 2,
      range: {
        min: 100,
        max: 999
      }
    },
    {
      numberOfOperands: 2,
      range: {
        min: 1000,
        max: 9999
      }
    },
    {
      numberOfOperands: 2,
      range: {
        min: 10000,
        max: 99999
      }
    },
    {
      numberOfOperands: 3,
      range: {
        min: 10,
        max: 99
      }
    },
    {
      numberOfOperands: 3,
      range: {
        min: 100,
        max: 999
      }
    },
    {
      numberOfOperands: 3,
      range: {
        min: 1000,
        max: 9999
      }
    },
    {
      numberOfOperands: 3,
      range: {
        min: 10000,
        max: 99999
      }
    }
  ],
  SUB: [
    {
      numberOfOperands: 2,
      range: {
        min: 1,
        max: 9
      }
    },
    {
      numberOfOperands: 3,
      range: {
        min: 1,
        max: 9
      }
    },
    {
      numberOfOperands: 2,
      range: {
        min: 10,
        max: 99
      }
    },
    {
      numberOfOperands: 2,
      range: {
        min: 100,
        max: 999
      }
    },
    {
      numberOfOperands: 2,
      range: {
        min: 1000,
        max: 9999
      }
    },
    {
      numberOfOperands: 2,
      range: {
        min: 10000,
        max: 99999
      }
    },
    {
      numberOfOperands: 3,
      range: {
        min: 10,
        max: 99
      }
    },
    {
      numberOfOperands: 3,
      range: {
        min: 100,
        max: 999
      }
    },
    {
      numberOfOperands: 3,
      range: {
        min: 1000,
        max: 9999
      }
    },
    {
      numberOfOperands: 3,
      range: {
        min: 10000,
        max: 99999
      }
    }
  ],
  MUL: [
    {
      numberOfOperands: 2,
      range: {
        min: 1,
        max: 9
      }
    },
    {
      numberOfOperands: 3,
      range: {
        min: 1,
        max: 9
      }
    },
    {
      numberOfOperands: 2,
      range: {
        min: 1,
        max: 50
      }
    },
    {
      numberOfOperands: 3,
      range: {
        min: 1,
        max: 50
      }
    },
    {
      numberOfOperands: 2,
      range: {
        min: 1,
        max: 99
      }
    },
    {
      numberOfOperands: 3,
      range: {
        min: 1,
        max: 99
      }
    },
    {
      numberOfOperands: 2,
      range: {
        min: 10,
        max: 99
      }
    },
    {
      numberOfOperands: 3,
      range: {
        min: 10,
        max: 99
      }
    },
    {
      numberOfOperands: 2,
      range: {
        min: 10,
        max: 999
      }
    },
    {
      numberOfOperands: 3,
      range: {
        min: 10,
        max: 999
      }
    }
  ],
  DIV: [
    {
      numberOfOperands: 2,
      range: {
        min: 1,
        max: 9
      }
    },
    {
      numberOfOperands: 3,
      range: {
        min: 1,
        max: 9
      }
    },
    {
      numberOfOperands: 2,
      range: {
        min: 1,
        max: 50
      }
    },
    {
      numberOfOperands: 3,
      range: {
        min: 1,
        max: 50
      }
    },
    {
      numberOfOperands: 2,
      range: {
        min: 1,
        max: 99
      }
    },
    {
      numberOfOperands: 3,
      range: {
        min: 1,
        max: 99
      }
    },
    {
      numberOfOperands: 2,
      range: {
        min: 10,
        max: 99
      }
    },
    {
      numberOfOperands: 3,
      range: {
        min: 10,
        max: 99
      }
    },
    {
      numberOfOperands: 2,
      range: {
        min: 10,
        max: 999
      }
    },
    {
      numberOfOperands: 3,
      range: {
        min: 10,
        max: 999
      }
    }
  ],
  EXP: [
    {
      baseRange: {
        min: 2,
        max: 10
      },
      powerRange: {
        min: 2,
        max: 2
      }
    },
    {
      baseRange: {
        min: 2,
        max: 10
      },
      powerRange: {
        min: 2,
        max: 3
      }
    },
    {
      baseRange: {
        min: 2,
        max: 10
      },
      powerRange: {
        min: 3,
        max: 3
      }
    },
    {
      baseRange: {
        min: 2,
        max: 25
      },
      powerRange: {
        min: 2,
        max: 2
      }
    },
    {
      baseRange: {
        min: 2,
        max: 25
      },
      powerRange: {
        min: 2,
        max: 3
      }
    },
    {
      baseRange: {
        min: 2,
        max: 25
      },
      powerRange: {
        min: 3,
        max: 3
      }
    },
    {
      baseRange: {
        min: 10,
        max: 50
      },
      powerRange: {
        min: 2,
        max: 3
      }
    },
    {
      baseRange: {
        min: 10,
        max: 50
      },
      powerRange: {
        min: 3,
        max: 3
      }
    },
    {
      baseRange: {
        min: 10,
        max: 99
      },
      powerRange: {
        min: 2,
        max: 3
      }
    },
    {
      baseRange: {
        min: 10,
        max: 99
      },
      powerRange: {
        min: 2,
        max: 3
      }
    }
  ]
}

export default {
  MIN_DURATION,
  MAX_DURATION,
  MIN_DIFFICULTY,
  MAX_DIFFICULTY,
  DIFFICULTIES
}
