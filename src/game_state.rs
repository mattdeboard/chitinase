extern crate daggy;

use daggy::{Dag, NodeIndex, WouldCycle};

struct Unit;

struct GameState {
  graph: Dag<Unit, u32, u32>,
  scenario: Option<u32>,
}

impl GameState {
  pub fn new() -> Self {
    let mut graph = Dag::<Unit, u32, u32>::new();
    graph.add_node(Unit);

    Self {
      graph,
      scenario: None,
    }
  }
}
