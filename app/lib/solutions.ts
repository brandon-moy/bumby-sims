type SolutionPatterns = {
  "1-ss-card": SolutionJobs;
  "1-ss-inter": SolutionJobs;
  "1-ds-card": SolutionJobs;
  "1-ds-inter": SolutionJobs;
  "2-ss-card": SolutionJobs;
  "2-ss-inter": SolutionJobs;
  "2-ds-card": SolutionJobs;
  "2-ds-inter": SolutionJobs;
  "3-ss-card": SolutionJobs;
  "3-ss-inter": SolutionJobs;
  "3-ds-card": SolutionJobs;
  "3-ds-inter": SolutionJobs;
  "4-ss-card": SolutionJobs;
  "4-ss-inter": SolutionJobs;
  "4-ds-card": SolutionJobs;
  "4-ds-inter": SolutionJobs;
};

type SolutionJobs = {
  mt: Solution;
  ot: Solution;
  h1: Solution;
  h2: Solution;
  m1: Solution;
  m2: Solution;
  r1: Solution;
  r2: Solution;
};

type Solution = {
  [key: string]: string;
};

export const solutions: SolutionPatterns = {
  "1-ss-card": {
    mt: {
      "step-one": "s1",
      "step-two": "d4",
    },
    ot: {
      "step-one": "s1",
      "step-two": "2",
    },
    h1: {
      "step-one": "s1",
      "step-two": "3",
    },
    h2: {
      "step-one": "s1",
      "step-two": "1b",
    },
    m1: {
      "step-one": "s1",
      "step-two": "a",
    },
    m2: {
      "step-one": "s1",
      "step-two": "a",
    },
    r1: {
      "step-one": "s1",
      "step-two": "a",
    },
    r2: {
      "step-one": "s1",
      "step-two": "a",
    },
  },
  "1-ss-inter": {
    mt: {
      "step-one": "s1",
      "step-two": "4a",
    },
    ot: {
      "step-one": "s1",
      "step-two": "c",
    },
    h1: {
      "step-one": "s1",
      "step-two": "d",
    },
    h2: {
      "step-one": "s1",
      "step-two": "b2",
    },
    m1: {
      "step-one": "s1",
      "step-two": "1",
    },
    m2: {
      "step-one": "s1",
      "step-two": "1",
    },
    r1: {
      "step-one": "s1",
      "step-two": "1",
    },
    r2: {
      "step-one": "s1",
      "step-two": "1",
    },
  },
  "1-ds-card": {
    mt: {
      "step-one": "4a",
      "step-two": "a",
    },
    ot: {
      "step-one": "c",
      "step-two": "a",
    },
    h1: {
      "step-one": "d",
      "step-two": "a",
    },
    h2: {
      "step-one": "b2",
      "step-two": "a",
    },
    m1: {
      "step-one": "s1",
      "step-two": "3",
    },
    m2: {
      "step-one": "s1",
      "step-two": "2",
    },
    r1: {
      "step-one": "s1",
      "step-two": "d4",
    },
    r2: {
      "step-one": "s1",
      "step-two": "1b",
    },
  },
  "1-ds-inter": {
    mt: {
      "step-one": "4a",
      "step-two": "1",
    },
    ot: {
      "step-one": "c",
      "step-two": "1",
    },
    h1: {
      "step-one": "d",
      "step-two": "1",
    },
    h2: {
      "step-one": "b2",
      "step-two": "1",
    },
    m1: {
      "step-one": "s1",
      "step-two": "d",
    },
    m2: {
      "step-one": "s1",
      "step-two": "c",
    },
    r1: {
      "step-one": "s1",
      "step-two": "4a",
    },
    r2: {
      "step-one": "s1",
      "step-two": "b2",
    },
  },
  "2-ss-card": {
    mt: {
      "step-one": "s2",
      "step-two": "d4",
    },
    ot: {
      "step-one": "s2",
      "step-two": "2",
    },
    h1: {
      "step-one": "s2",
      "step-two": "3",
    },
    h2: {
      "step-one": "s2",
      "step-two": "1b",
    },
    m1: {
      "step-one": "c3",
      "step-two": "a",
    },
    m2: {
      "step-one": "1b",
      "step-two": "a",
    },
    r1: {
      "step-one": "d4",
      "step-two": "a",
    },
    r2: {
      "step-one": "a",
      "step-two": "a",
    },
  },
  "2-ss-inter": {
    mt: {
      "step-one": "s2",
      "step-two": "4a",
    },
    ot: {
      "step-one": "s2",
      "step-two": "c",
    },
    h1: {
      "step-one": "s2",
      "step-two": "d",
    },
    h2: {
      "step-one": "s2",
      "step-two": "b2",
    },
    m1: {
      "step-one": "c3",
      "step-two": "1",
    },
    m2: {
      "step-one": "1b",
      "step-two": "1",
    },
    r1: {
      "step-one": "d4",
      "step-two": "1",
    },
    r2: {
      "step-one": "a",
      "step-two": "1",
    },
  },

  "2-ds-card": {
    mt: {
      "step-one": "a",
      "step-two": "a",
    },
    ot: {
      "step-one": "c",
      "step-two": "a",
    },
    h1: {
      "step-one": "c3",
      "step-two": "a",
    },
    h2: {
      "step-one": "1b",
      "step-two": "a",
    },
    m1: {
      "step-one": "s2",
      "step-two": "3",
    },
    m2: {
      "step-one": "s2",
      "step-two": "2",
    },
    r1: {
      "step-one": "s2",
      "step-two": "d4",
    },
    r2: {
      "step-one": "s2",
      "step-two": "1b",
    },
  },
  "2-ds-inter": {
    mt: {
      "step-one": "a",
      "step-two": "1",
    },
    ot: {
      "step-one": "c3",
      "step-two": "1",
    },
    h1: {
      "step-one": "d4",
      "step-two": "1",
    },
    h2: {
      "step-one": "1b",
      "step-two": "1",
    },
    m1: {
      "step-one": "s2",
      "step-two": "d",
    },
    m2: {
      "step-one": "s2",
      "step-two": "c",
    },
    r1: {
      "step-one": "s2",
      "step-two": "4a",
    },
    r2: {
      "step-one": "s2",
      "step-two": "b2",
    },
  },
  "3-ss-card": {
    mt: {
      "step-one": "s3",
      "step-two": "d4",
    },
    ot: {
      "step-one": "s3",
      "step-two": "2",
    },
    h1: {
      "step-one": "s3",
      "step-two": "3",
    },
    h2: {
      "step-one": "s3",
      "step-two": "1b",
    },
    m1: {
      "step-one": "2c",
      "step-two": "a",
    },
    m2: {
      "step-one": "b",
      "step-two": "a",
    },
    r1: {
      "step-one": "d4",
      "step-two": "a",
    },
    r2: {
      "step-one": "a",
      "step-two": "a",
    },
  },
  "3-ss-inter": {
    mt: {
      "step-one": "s3",
      "step-two": "4a",
    },
    ot: {
      "step-one": "s3",
      "step-two": "c",
    },
    h1: {
      "step-one": "s3",
      "step-two": "d",
    },
    h2: {
      "step-one": "s3",
      "step-two": "b2",
    },
    m1: {
      "step-one": "s1",
      "step-two": "1",
    },
    m2: {
      "step-one": "s1",
      "step-two": "1",
    },
    r1: {
      "step-one": "s1",
      "step-two": "1",
    },
    r2: {
      "step-one": "d4",
      "step-two": "1",
    },
  },
  "3-ds-card": {
    mt: {
      "step-one": "a",
      "step-two": "a",
    },
    ot: {
      "step-one": "2c",
      "step-two": "a",
    },
    h1: {
      "step-one": "d4",
      "step-two": "a",
    },
    h2: {
      "step-one": "b",
      "step-two": "a",
    },
    m1: {
      "step-one": "s3",
      "step-two": "3",
    },
    m2: {
      "step-one": "s3",
      "step-two": "2",
    },
    r1: {
      "step-one": "s3",
      "step-two": "d4",
    },
    r2: {
      "step-one": "s3",
      "step-two": "1b",
    },
  },
  "3-ds-inter": {
    mt: {
      "step-one": "4a",
      "step-two": "1",
    },
    ot: {
      "step-one": "c",
      "step-two": "1",
    },
    h1: {
      "step-one": "d",
      "step-two": "1",
    },
    h2: {
      "step-one": "b2",
      "step-two": "1",
    },
    m1: {
      "step-one": "s3",
      "step-two": "d",
    },
    m2: {
      "step-one": "s3",
      "step-two": "c",
    },
    r1: {
      "step-one": "s3",
      "step-two": "4a",
    },
    r2: {
      "step-one": "s3",
      "step-two": "b2",
    },
  },
  "4-ss-card": {
    mt: {
      "step-one": "s4",
      "step-two": "d4",
    },
    ot: {
      "step-one": "s4",
      "step-two": "2",
    },
    h1: {
      "step-one": "s4",
      "step-two": "3",
    },
    h2: {
      "step-one": "s4",
      "step-two": "1b",
    },
    m1: {
      "step-one": "c",
      "step-two": "a",
    },
    m2: {
      "step-one": "b",
      "step-two": "a",
    },
    r1: {
      "step-one": "3d",
      "step-two": "a",
    },
    r2: {
      "step-one": "a1",
      "step-two": "a",
    },
  },
  "4-ss-inter": {
    mt: {
      "step-one": "s4",
      "step-two": "4a",
    },
    ot: {
      "step-one": "s4",
      "step-two": "c",
    },
    h1: {
      "step-one": "s4",
      "step-two": "d",
    },
    h2: {
      "step-one": "s4",
      "step-two": "b2",
    },
    m1: {
      "step-one": "c",
      "step-two": "1",
    },
    m2: {
      "step-one": "b",
      "step-two": "1",
    },
    r1: {
      "step-one": "3d",
      "step-two": "1",
    },
    r2: {
      "step-one": "a1",
      "step-two": "1",
    },
  },
  "4-ds-card": {
    mt: {
      "step-one": "a1",
      "step-two": "a",
    },
    ot: {
      "step-one": "c",
      "step-two": "a",
    },
    h1: {
      "step-one": "3d",
      "step-two": "a",
    },
    h2: {
      "step-one": "b",
      "step-two": "a",
    },
    m1: {
      "step-one": "s4",
      "step-two": "3",
    },
    m2: {
      "step-one": "s4",
      "step-two": "2",
    },
    r1: {
      "step-one": "s4",
      "step-two": "d4",
    },
    r2: {
      "step-one": "s4",
      "step-two": "1b",
    },
  },
  "4-ds-inter": {
    mt: {
      "step-one": "a1",
      "step-two": "1",
    },
    ot: {
      "step-one": "c",
      "step-two": "1",
    },
    h1: {
      "step-one": "3d",
      "step-two": "1",
    },
    h2: {
      "step-one": "b",
      "step-two": "1",
    },
    m1: {
      "step-one": "s4",
      "step-two": "d",
    },
    m2: {
      "step-one": "s4",
      "step-two": "c",
    },
    r1: {
      "step-one": "s4",
      "step-two": "4a",
    },
    r2: {
      "step-one": "s4",
      "step-two": "b2",
    },
  },
};
