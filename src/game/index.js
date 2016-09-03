/**
 * This is the core of the game! :D
 */

const game = {
  'intro': {
    paragraphs: [
      'stage_intro_p_1',
      'stage_intro_p_2'
    ],
    sound: {},
    image: {},
    conversation: false,
    actions: [
      {
        text: 'action_1',
        require: {
          sanity: 50,
          object: 'key'
        },
        cost: {
          sanity: 10
        },
        reward: {
          sanity: 10,
          object: 'key2'
        },
        nextStage: 'investigate_floor'
      },
      {
        text: 'action_2',
        require: {
          sanity: 50,
          object: 'key'
        },
        cost: {
          sanity: 10
        },
        reward: {
          sanity: 10,
          object: 'key2'
        },
        nextStage: 'investigate_floor'
      },
      {
        text: 'action_2',
        require: {
          sanity: 50,
          object: 'key'
        },
        cost: {
          sanity: 10
        },
        reward: {
          sanity: 10,
          object: 'key2'
        },
        nextStage: 'investigate_floor'
      }
    ]
  },
  'investigate_floor': {
    paragraphs: [
      'stage_investigate_floor_p_1',
      'stage_investigate_floor_p_2'
    ],
    sound: {},
    image: {},
    conversation: true,
    actions: [
      {
        text: 'action_3',
        nextStage: 'intro'
      },
      {
        text: 'action_4',
        nextStage: 'intro'
      },
      {
        text: 'action_4',
        nextStage: 'intro'
      }
    ]
  }
}

export default game;
