from _typeshed import Incomplete

from networkx.utils.backends import _dispatchable

@_dispatchable
def caveman_graph(l, k): ...
@_dispatchable
def connected_caveman_graph(l, k): ...
@_dispatchable
def relaxed_caveman_graph(l, k, p, seed: Incomplete | None = None): ...
@_dispatchable
def random_partition_graph(sizes, p_in, p_out, seed: Incomplete | None = None, directed: bool = False): ...
@_dispatchable
def planted_partition_graph(l, k, p_in, p_out, seed: Incomplete | None = None, directed: bool = False): ...
@_dispatchable
def gaussian_random_partition_graph(n, s, v, p_in, p_out, directed: bool = False, seed: Incomplete | None = None): ...
@_dispatchable
def ring_of_cliques(num_cliques, clique_size): ...
@_dispatchable
def windmill_graph(n, k): ...
@_dispatchable
def stochastic_block_model(
    sizes,
    p,
    nodelist: Incomplete | None = None,
    seed: Incomplete | None = None,
    directed: bool = False,
    selfloops: bool = False,
    sparse: bool = True,
): ...
@_dispatchable
def LFR_benchmark_graph(
    n,
    tau1,
    tau2,
    mu,
    average_degree: Incomplete | None = None,
    min_degree: Incomplete | None = None,
    max_degree: Incomplete | None = None,
    min_community: Incomplete | None = None,
    max_community: Incomplete | None = None,
    tol: float = 1e-07,
    max_iters: int = 500,
    seed: Incomplete | None = None,
): ...
