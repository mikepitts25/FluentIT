import type { Card } from '../types';

const quantumCardSeeds: Array<Omit<Card, 'domain'>> = [
  {
    id: 'quantum-computing',
    title: 'Quantum Computing',
    subtitle: 'Computing with quantum states instead of classical bits',
    difficulty: 'beginner',
    tags: ['foundation', 'qubits', 'quantum mechanics', 'computing'],
    definition:
      'Quantum computing uses quantum mechanical effects such as superposition, entanglement, interference, and measurement to process information. Instead of only using bits that are 0 or 1, quantum computers operate on qubits whose state can be manipulated by quantum gates and read out with measurements.',
    whyItMatters:
      'Quantum computers are not faster general-purpose laptops. Their value is in specific problem classes where quantum algorithms may eventually outperform classical methods, such as chemistry simulation, materials modeling, optimization, and some cryptographic attacks.',
    analogy:
      'Like adding a new kind of laboratory instrument, not a faster spreadsheet. It gives researchers a way to explore certain systems that classical computers struggle to represent directly.',
    soundsSmartToSay:
      '"We should frame quantum as a specialized accelerator for certain problems, not as a replacement for classical cloud computing."',
    commonConfusions: [
      'Quantum computers do not try every answer at once and simply pick the right one. Algorithms must use interference so wrong paths cancel and useful answers become more likely.',
      'Quantum computing is different from post-quantum cryptography. One builds quantum hardware; the other protects classical systems against future quantum attacks.',
    ],
    relatedTerms: ['Qubit', 'Quantum Gate', 'Quantum Circuit', 'Quantum Advantage'],
  },
  {
    id: 'quantum-qubit',
    title: 'Qubit',
    subtitle: 'The basic unit of quantum information',
    difficulty: 'beginner',
    tags: ['foundation', 'state', 'information'],
    definition:
      'A qubit is the quantum version of a bit. When measured, it returns a classical 0 or 1, but before measurement its state can be a combination of the two basis states, described by probability amplitudes.',
    whyItMatters:
      'Qubits are the raw material of quantum computation. Their behavior enables quantum algorithms, but their fragility also creates the engineering challenge of noise, decoherence, and error correction.',
    analogy:
      'Like a compass needle before you force it into one of two slots. It can point in many directions, but the final readout gives a discrete result.',
    soundsSmartToSay:
      '"The number of physical qubits is only one metric; coherence, gate fidelity, connectivity, and error correction matter just as much."',
    commonConfusions: [
      'A qubit is not just a bit that can be both 0 and 1 in a magical sense. It is a quantum state with amplitudes that can interfere.',
      'More qubits do not automatically mean a better machine. Low-quality qubits can produce less useful work than fewer high-fidelity qubits.',
    ],
    relatedTerms: ['Superposition', 'Bloch Sphere', 'Physical vs Logical Qubits', 'Quantum Measurement'],
  },
  {
    id: 'quantum-superposition',
    title: 'Superposition',
    subtitle: 'A quantum state combining multiple possibilities',
    difficulty: 'beginner',
    tags: ['foundation', 'state', 'amplitudes'],
    definition:
      'Superposition is when a quantum system is in a combination of basis states until measurement. The probabilities of outcomes come from amplitudes, and quantum algorithms work by changing those amplitudes through gates and interference.',
    whyItMatters:
      'Superposition gives quantum algorithms a richer state space to manipulate than classical bits. It is useful only when paired with carefully designed operations that make good outcomes more likely.',
    analogy:
      'Like a wave that can combine several tones at once. The useful behavior comes from how those tones reinforce or cancel each other.',
    soundsSmartToSay:
      '"Superposition gives us amplitudes to work with, but the algorithm has to shape those amplitudes into a measurable advantage."',
    commonConfusions: [
      'Superposition does not mean the computer can read out every possible answer. Measurement returns one classical result.',
      'Superposition is not the same as uncertainty from ignorance. It is a real quantum state, not just missing information.',
    ],
    relatedTerms: ['Qubit', 'Quantum Interference', 'Quantum Measurement', 'Hadamard Gate'],
  },
  {
    id: 'quantum-entanglement',
    title: 'Quantum Entanglement',
    subtitle: 'Correlations between quantum systems that classical bits cannot copy',
    difficulty: 'beginner',
    tags: ['foundation', 'correlation', 'multi-qubit'],
    definition:
      'Entanglement is a relationship between quantum systems where the state of the whole cannot be fully described by the states of the parts separately. Measuring one part gives information about the correlated system, even when the systems are physically separated.',
    whyItMatters:
      'Entanglement is a core resource in quantum computing, quantum networking, teleportation protocols, and many quantum algorithms. It enables correlations that classical systems cannot efficiently reproduce.',
    analogy:
      'Like two dice that are not merely prearranged, but governed by one shared rule until they are rolled and observed.',
    soundsSmartToSay:
      '"Entanglement is the resource that makes multi-qubit behavior hard to simulate classically, but it is also fragile under noise."',
    commonConfusions: [
      'Entanglement does not allow faster-than-light communication. Measurement outcomes are correlated, but no controllable message travels instantly.',
      'Correlation alone is not entanglement. Classical systems can be correlated; entangled systems have correlations that violate classical assumptions.',
    ],
    relatedTerms: ['Bell Test', 'CNOT Gate', 'Quantum Teleportation', 'No-Cloning Theorem'],
  },
  {
    id: 'quantum-interference',
    title: 'Quantum Interference',
    subtitle: 'Using amplitudes to reinforce good paths and cancel bad ones',
    difficulty: 'intermediate',
    tags: ['algorithms', 'amplitudes', 'probability'],
    definition:
      'Quantum interference is the way probability amplitudes combine. Positive and negative amplitudes can reinforce or cancel each other, changing which measurement outcomes become likely.',
    whyItMatters:
      'Interference is what turns superposition into computation. Quantum algorithms are designed so the wrong answers tend to cancel out and useful answers are amplified.',
    analogy:
      'Like overlapping water waves. Waves moving together make a bigger wave; waves out of phase flatten each other.',
    soundsSmartToSay:
      '"The algorithm is not useful because it explores many states; it is useful because interference increases the probability of measuring the right structure."',
    commonConfusions: [
      'Interference is not noise. Noise is unwanted disturbance; interference is the intentional mathematical effect algorithms exploit.',
      'You usually need repeated runs because quantum outputs are probabilistic, even after interference shapes the distribution.',
    ],
    relatedTerms: ['Superposition', 'Quantum Algorithm', 'Grover\'s Algorithm', 'Quantum Fourier Transform'],
  },
  {
    id: 'quantum-measurement',
    title: 'Quantum Measurement',
    subtitle: 'Reading a quantum state as classical information',
    difficulty: 'beginner',
    tags: ['readout', 'probability', 'state'],
    definition:
      'Quantum measurement extracts classical information from a quantum system. The result is probabilistic according to the state amplitudes, and the act of measurement changes the system into the measured basis state.',
    whyItMatters:
      'Quantum programs must be designed around measurement. You do not inspect the full quantum state directly; you run circuits many times and estimate useful probabilities from the results.',
    analogy:
      'Like checking a spinning wheel that stops on one slot when observed. Repeating the experiment shows the distribution, not every hidden value at once.',
    soundsSmartToSay:
      '"We need enough shots to estimate the output distribution; a single measurement tells us one sample, not the whole quantum state."',
    commonConfusions: [
      'Measurement is not just logging a value. It changes the quantum state and limits what information can be recovered.',
      'A simulator can show state vectors, but real hardware returns measurement samples.',
    ],
    relatedTerms: ['Qubit', 'Superposition', 'Quantum Circuit', 'Shots'],
  },
  {
    id: 'quantum-gate',
    title: 'Quantum Gate',
    subtitle: 'A reversible operation applied to qubits',
    difficulty: 'beginner',
    tags: ['circuits', 'operations', 'gates'],
    definition:
      'A quantum gate is an operation that changes the state of one or more qubits. Gates are usually represented as matrices and must preserve quantum state information until measurement, which makes them reversible in the ideal model.',
    whyItMatters:
      'Gates are the building blocks of most quantum programs. Hardware quality is often judged by how accurately it can perform one-qubit and two-qubit gates.',
    analogy:
      'Like a logic gate in classical computing, but one that rotates and entangles quantum states instead of simply flipping bits.',
    soundsSmartToSay:
      '"The two-qubit gate error rate is often the bottleneck, because entangling gates are harder than single-qubit rotations."',
    commonConfusions: [
      'Quantum gates are not normal Boolean gates. They transform amplitudes, and many have no direct classical equivalent.',
      'Measurements are not gates in the same sense. They read out and collapse state rather than preserving reversible evolution.',
    ],
    relatedTerms: ['Hadamard Gate', 'Pauli Gates', 'CNOT Gate', 'Quantum Circuit'],
  },
  {
    id: 'quantum-hadamard-gate',
    title: 'Hadamard Gate',
    subtitle: 'A gate that creates balanced superposition',
    difficulty: 'beginner',
    tags: ['gates', 'superposition', 'circuits'],
    definition:
      'The Hadamard gate is a one-qubit operation often used to create or reverse a balanced superposition. Applied to a basis state, it produces equal-magnitude amplitudes that algorithms can then shape with other gates.',
    whyItMatters:
      'Many introductory quantum circuits start with Hadamards because they prepare qubits for interference. They are common in algorithms, demonstrations, and tests of hardware behavior.',
    analogy:
      'Like splitting a beam of light into two paths so later mirrors can make the paths reinforce or cancel.',
    soundsSmartToSay:
      '"The Hadamard creates the superposition, but the later gates determine whether that superposition becomes useful computation."',
    commonConfusions: [
      'A Hadamard is not a randomizer. It creates a precise quantum state; randomness appears when the state is measured.',
      'Applying Hadamard twice returns the qubit to its original basis state in the ideal model.',
    ],
    relatedTerms: ['Superposition', 'Quantum Gate', 'Quantum Interference', 'Quantum Circuit'],
  },
  {
    id: 'quantum-pauli-gates',
    title: 'Pauli Gates',
    subtitle: 'Basic X, Y, and Z operations on a qubit',
    difficulty: 'intermediate',
    tags: ['gates', 'bloch sphere', 'operations'],
    definition:
      'Pauli gates are fundamental one-qubit operations named X, Y, and Z. X flips between basis states, Z changes phase, and Y combines a bit-flip-like and phase effect.',
    whyItMatters:
      'Pauli gates are core vocabulary for circuits, error correction, calibration, and debugging. Many quantum errors are described as bit-flip, phase-flip, or combined Pauli errors.',
    analogy:
      'Like the basic steering moves for a qubit: flip across one axis, rotate phase around another, or combine both motions.',
    soundsSmartToSay:
      '"A phase error can be invisible if we only think in classical bit flips; Pauli Z errors are why quantum error correction has to track phase as well."',
    commonConfusions: [
      'The X gate is similar to a NOT gate only when the qubit is in a basis state. On superpositions, phase relationships still matter.',
      'Z does not change a measured 0 or 1 directly, but it changes phase, which can affect later interference.',
    ],
    relatedTerms: ['Quantum Gate', 'Bloch Sphere', 'Quantum Error Correction', 'Hadamard Gate'],
  },
  {
    id: 'quantum-cnot-gate',
    title: 'CNOT Gate',
    subtitle: 'A controlled operation that can create entanglement',
    difficulty: 'intermediate',
    tags: ['gates', 'entanglement', 'two-qubit'],
    definition:
      'CNOT, or controlled-NOT, is a two-qubit gate where one qubit controls whether an X operation is applied to another qubit. Combined with superposition, it can create entangled states.',
    whyItMatters:
      'Two-qubit gates like CNOT are essential for useful quantum computation because they connect qubits into shared states. They are also among the hardest operations to perform accurately on real hardware.',
    analogy:
      'Like a switch where one qubit decides whether another qubit is flipped, except the switch itself can be in superposition.',
    soundsSmartToSay:
      '"CNOT fidelity is a practical limit on circuit depth, because every noisy entangling gate reduces the trustworthiness of the result."',
    commonConfusions: [
      'CNOT does not always create entanglement. It creates entanglement only for suitable input states, such as when the control is in superposition.',
      'Controlled gates are not classical if-statements. They operate coherently on amplitudes before measurement.',
    ],
    relatedTerms: ['Quantum Entanglement', 'Quantum Gate', 'Quantum Circuit', 'Bell Test'],
  },
  {
    id: 'quantum-circuit',
    title: 'Quantum Circuit',
    subtitle: 'A program made from gates, wires, and measurements',
    difficulty: 'beginner',
    tags: ['programming', 'gates', 'workflow'],
    definition:
      'A quantum circuit represents a sequence of operations applied to qubits, usually shown as wires over time with gates and measurements placed along them. It is the common programming model for gate-based quantum computers.',
    whyItMatters:
      'Quantum algorithms are usually expressed as circuits before they are compiled to hardware. Circuit depth, gate count, and qubit connectivity strongly affect whether a program can run successfully.',
    analogy:
      'Like a musical score for qubits. Each line shows what happens to one qubit, and timing matters because operations combine into one performance.',
    soundsSmartToSay:
      '"The circuit is too deep for today\'s hardware; noise will dominate before the useful interference pattern emerges."',
    commonConfusions: [
      'A circuit diagram is not the hardware layout. It is a logical sequence that must be compiled onto a device with specific connectivity.',
      'A quantum circuit often needs many repeated shots to estimate the output distribution.',
    ],
    relatedTerms: ['Quantum Gate', 'CNOT Gate', 'Quantum Compiler', 'NISQ'],
  },
  {
    id: 'quantum-bloch-sphere',
    title: 'Bloch Sphere',
    subtitle: 'A visual model for one-qubit states',
    difficulty: 'intermediate',
    tags: ['visualization', 'qubit', 'state'],
    definition:
      'The Bloch sphere is a geometric way to visualize the state of a single qubit. Points on the sphere represent pure qubit states, while rotations around axes correspond to many one-qubit gate operations.',
    whyItMatters:
      'The Bloch sphere helps people reason about superposition, phase, and single-qubit gates without diving into all the matrix math.',
    analogy:
      'Like a globe for one qubit. The poles are the basis states, and other points show different mixtures and phases.',
    soundsSmartToSay:
      '"The Bloch sphere is great for one qubit, but it does not scale as a visualization for entangled multi-qubit states."',
    commonConfusions: [
      'The Bloch sphere does not show many-qubit entanglement. It is mainly a one-qubit mental model.',
      'Points on opposite sides are not just classical 0 and 1; phase and basis choice determine how later gates behave.',
    ],
    relatedTerms: ['Qubit', 'Pauli Gates', 'Hadamard Gate', 'Superposition'],
  },
  {
    id: 'quantum-simulator',
    title: 'Quantum Simulator',
    subtitle: 'Classical software that imitates quantum circuits or systems',
    difficulty: 'beginner',
    tags: ['simulation', 'development', 'testing'],
    definition:
      'A quantum simulator is classical software that models quantum behavior. Developers use simulators to test circuits, inspect state, estimate resources, and learn quantum programming before running on real hardware.',
    whyItMatters:
      'Simulators are essential for development, but they hit scaling limits because the state space grows exponentially with qubit count. That limit is one reason quantum computers are interesting.',
    analogy:
      'Like a flight simulator that lets you practice safely, except the simulator becomes infeasible when the aircraft has too many interacting controls.',
    soundsSmartToSay:
      '"We should validate the small circuit in a simulator first, but simulation will not tell us how the full-scale version behaves on noisy hardware."',
    commonConfusions: [
      'A simulator is not a quantum computer. It runs on classical hardware and becomes expensive as qubit counts grow.',
      'Noise-free simulation can hide practical hardware problems such as gate errors, readout errors, and decoherence.',
    ],
    relatedTerms: ['Quantum Circuit', 'QPU', 'NISQ', 'Resource Estimation'],
  },
  {
    id: 'quantum-qpu',
    title: 'Quantum Processing Unit (QPU)',
    subtitle: 'The hardware that runs quantum operations',
    difficulty: 'beginner',
    tags: ['hardware', 'cloud', 'qubits'],
    definition:
      'A QPU is the physical quantum processor that hosts qubits and performs quantum operations. Different platforms use different physical technologies, including superconducting circuits, trapped ions, photons, neutral atoms, and other approaches.',
    whyItMatters:
      'QPU capabilities determine what quantum circuits can actually run. Qubit count, coherence, gate fidelity, connectivity, readout quality, and queue access all shape real workloads.',
    analogy:
      'Like a GPU for a very specific physics-based workload, except the device is far more sensitive to its environment.',
    soundsSmartToSay:
      '"We need to compare QPUs by workload-relevant metrics, not just advertised qubit count."',
    commonConfusions: [
      'A QPU usually works with classical computers. The classical system prepares jobs, controls pulses, and processes measurement results.',
      'Different QPU technologies have different strengths; there is no single winning architecture for every use case yet.',
    ],
    relatedTerms: ['Superconducting Qubits', 'Trapped Ion Qubits', 'Quantum Cloud Services', 'Quantum Volume'],
  },
  {
    id: 'quantum-nisq',
    title: 'NISQ',
    subtitle: 'Noisy Intermediate-Scale Quantum devices',
    difficulty: 'intermediate',
    tags: ['hardware', 'noise', 'near-term'],
    definition:
      'NISQ stands for Noisy Intermediate-Scale Quantum. It describes today\'s quantum devices: enough qubits to be scientifically interesting, but still noisy and not yet fully error-corrected.',
    whyItMatters:
      'NISQ sets realistic expectations. Near-term algorithms must tolerate noise and limited circuit depth, while many high-value applications likely require fault-tolerant machines.',
    analogy:
      'Like early aircraft before commercial aviation matured. They can demonstrate important principles, but they are not yet reliable cargo planes.',
    soundsSmartToSay:
      '"This is a NISQ-era experiment, so we should expect short circuits, mitigation techniques, and careful benchmarking rather than production-grade advantage."',
    commonConfusions: [
      'NISQ does not mean useless. It means noisy and limited, with research value and some possible early workloads.',
      'NISQ is not the same as fault-tolerant quantum computing. Fault tolerance requires error-corrected logical qubits.',
    ],
    relatedTerms: ['Quantum Noise', 'Quantum Error Correction', 'Quantum Advantage', 'Fault-Tolerant Quantum Computing'],
  },
  {
    id: 'quantum-decoherence',
    title: 'Quantum Decoherence',
    subtitle: 'When a quantum state loses useful coherence',
    difficulty: 'intermediate',
    tags: ['noise', 'hardware', 'coherence'],
    definition:
      'Decoherence is the loss of fragile quantum behavior as a system interacts with its environment. It causes quantum states to lose the phase relationships needed for interference and computation.',
    whyItMatters:
      'Decoherence limits how long qubits can hold information and how deep circuits can be. Quantum hardware engineering is largely about isolating qubits while still controlling and measuring them.',
    analogy:
      'Like trying to keep a perfectly synchronized choir singing while noise from the street leaks into the room.',
    soundsSmartToSay:
      '"The coherence time gives us a budget: if the circuit takes too long, the qubits lose the phase information the algorithm depends on."',
    commonConfusions: [
      'Decoherence is not the same as measurement, though measurement is one way quantum behavior is destroyed for a chosen basis.',
      'Long coherence time is valuable, but gate speed and fidelity also matter.',
    ],
    relatedTerms: ['Quantum Noise', 'NISQ', 'Quantum Error Correction', 'Qubit'],
  },
  {
    id: 'quantum-noise',
    title: 'Quantum Noise',
    subtitle: 'Unwanted errors in quantum states and operations',
    difficulty: 'intermediate',
    tags: ['errors', 'hardware', 'reliability'],
    definition:
      'Quantum noise is unwanted disturbance that corrupts qubit states, gates, or measurements. It can come from environment interactions, imperfect control pulses, crosstalk, calibration drift, or readout errors.',
    whyItMatters:
      'Noise is the main reason current quantum computers cannot run long, reliable circuits. Practical work requires mitigation today and error correction for future large-scale systems.',
    analogy:
      'Like static on a radio signal, except the information being corrupted is also changed by how you try to observe it.',
    soundsSmartToSay:
      '"The algorithm may be sound, but the hardware noise model determines whether we can extract a useful signal from the measurements."',
    commonConfusions: [
      'Noise mitigation reduces the impact of errors; it is not the same as full quantum error correction.',
      'Readout noise and gate noise are different failure modes and may require different mitigation strategies.',
    ],
    relatedTerms: ['Quantum Decoherence', 'NISQ', 'Quantum Error Correction', 'Readout Error'],
  },
  {
    id: 'quantum-error-correction',
    title: 'Quantum Error Correction',
    subtitle: 'Protecting quantum information by encoding it across many qubits',
    difficulty: 'advanced',
    tags: ['fault tolerance', 'errors', 'logical qubits'],
    definition:
      'Quantum error correction encodes one logical qubit across many physical qubits so errors can be detected and corrected without directly measuring the encoded quantum information.',
    whyItMatters:
      'Large, reliable quantum programs likely require error correction. Without it, noise limits circuit depth and prevents many valuable algorithms from running at useful scale.',
    analogy:
      'Like writing a message across many fragile pages with enough redundancy that damage can be detected and repaired without reading the secret message itself.',
    soundsSmartToSay:
      '"The practical question is not just physical qubit count; it is how many high-quality logical qubits the system can sustain."',
    commonConfusions: [
      'Quantum error correction cannot simply copy qubits because of the no-cloning theorem. It uses entangled encodings and syndrome measurements.',
      'Error correction adds overhead. A useful logical qubit can require many physical qubits depending on hardware quality and code choice.',
    ],
    relatedTerms: ['Physical vs Logical Qubits', 'Surface Code', 'Fault-Tolerant Quantum Computing', 'No-Cloning Theorem'],
  },
  {
    id: 'quantum-physical-logical-qubits',
    title: 'Physical vs Logical Qubits',
    subtitle: 'Raw hardware qubits versus error-corrected encoded qubits',
    difficulty: 'advanced',
    tags: ['hardware', 'error correction', 'scaling'],
    definition:
      'A physical qubit is an actual hardware qubit. A logical qubit is an encoded unit of quantum information built from many physical qubits and error correction procedures.',
    whyItMatters:
      'Fault-tolerant quantum computing is measured by useful logical qubits, not just raw physical qubits. The overhead between the two is one of the biggest scaling challenges.',
    analogy:
      'Like storing one reliable file across many unreliable disks with redundancy and repair checks.',
    soundsSmartToSay:
      '"A thousand physical qubits sounds impressive, but the application roadmap depends on how many logical qubits we can operate below the error threshold."',
    commonConfusions: [
      'A logical qubit is not a better manufactured qubit. It is an encoded abstraction maintained by error correction.',
      'The physical-to-logical ratio is not fixed. It depends on error rates, code choice, and target reliability.',
    ],
    relatedTerms: ['Quantum Error Correction', 'Surface Code', 'Fault-Tolerant Quantum Computing', 'Resource Estimation'],
  },
  {
    id: 'quantum-fault-tolerant',
    title: 'Fault-Tolerant Quantum Computing',
    subtitle: 'Running long quantum programs despite hardware errors',
    difficulty: 'advanced',
    tags: ['fault tolerance', 'error correction', 'future systems'],
    definition:
      'Fault-tolerant quantum computing means using error-corrected logical qubits and operations so quantum computations can continue reliably even though the underlying hardware has errors.',
    whyItMatters:
      'Many high-impact algorithms, including large chemistry simulations and cryptographically relevant Shor runs, require fault tolerance rather than today\'s noisy devices.',
    analogy:
      'Like aviation safety systems where individual parts can fail but the aircraft continues operating within a controlled envelope.',
    soundsSmartToSay:
      '"The business milestone is not just more qubits; it is enough fault-tolerant logical operations to run an algorithm that matters."',
    commonConfusions: [
      'Fault tolerant does not mean error-free. It means errors are controlled below thresholds so the computation remains reliable.',
      'Fault-tolerant systems still need classical control, decoding, scheduling, and resource estimation.',
    ],
    relatedTerms: ['Quantum Error Correction', 'Physical vs Logical Qubits', 'Surface Code', 'Resource Estimation'],
  },
  {
    id: 'quantum-surface-code',
    title: 'Surface Code',
    subtitle: 'A leading approach to quantum error correction',
    difficulty: 'advanced',
    tags: ['error correction', 'logical qubits', 'fault tolerance'],
    definition:
      'The surface code is a quantum error correction scheme that arranges physical qubits in a grid and uses repeated syndrome measurements to detect errors while protecting logical information.',
    whyItMatters:
      'Surface-code-style approaches are central to many fault-tolerant roadmaps because they can tolerate realistic local error models, though they require substantial qubit overhead.',
    analogy:
      'Like a tiled floor where cracks can be detected by checking the pattern around each tile without lifting the whole floor.',
    soundsSmartToSay:
      '"Surface code overhead is high, but it gives hardware teams a concrete path from noisy physical qubits to protected logical qubits."',
    commonConfusions: [
      'The surface code is not the only error correction code. Other codes may reduce overhead or fit specific hardware better.',
      'Syndrome measurements detect error patterns without revealing the protected quantum state directly.',
    ],
    relatedTerms: ['Quantum Error Correction', 'Physical vs Logical Qubits', 'Fault-Tolerant Quantum Computing', 'Syndrome Measurement'],
  },
  {
    id: 'quantum-volume',
    title: 'Quantum Volume',
    subtitle: 'A benchmark for useful quantum circuit capability',
    difficulty: 'intermediate',
    tags: ['benchmarking', 'hardware', 'performance'],
    definition:
      'Quantum volume is a benchmark intended to capture more than qubit count by testing how well a device can run certain random circuits. It reflects factors like gate fidelity, connectivity, compiler quality, and error rates.',
    whyItMatters:
      'Quantum hardware needs multidimensional benchmarks. A device with many qubits but poor gates may be less useful than a smaller, cleaner system for certain workloads.',
    analogy:
      'Like judging a delivery truck by payload, reliability, route access, and fuel efficiency rather than engine size alone.',
    soundsSmartToSay:
      '"Qubit count is the headline, but quantum volume and application-level benchmarks tell us more about what the device can actually run."',
    commonConfusions: [
      'Quantum volume is not the only benchmark. Different workloads need different metrics.',
      'A higher benchmark score does not guarantee advantage on a specific business problem.',
    ],
    relatedTerms: ['QPU', 'Quantum Advantage', 'NISQ', 'Circuit Depth'],
  },
  {
    id: 'quantum-advantage',
    title: 'Quantum Advantage',
    subtitle: 'When quantum computation beats the best practical classical approach',
    difficulty: 'intermediate',
    tags: ['benchmarking', 'performance', 'business value'],
    definition:
      'Quantum advantage is when a quantum computer solves a useful task better than the best known practical classical method, usually in speed, scale, cost, or accuracy.',
    whyItMatters:
      'Quantum advantage is the milestone that matters for adoption. It shifts the conversation from impressive physics demos to workloads where quantum changes what organizations can do.',
    analogy:
      'Like a new transport route that is not just novel, but actually gets goods delivered faster or cheaper than existing routes.',
    soundsSmartToSay:
      '"We should ask what kind of advantage is being claimed: scientific benchmark, runtime improvement, cost reduction, or business outcome."',
    commonConfusions: [
      'Quantum advantage is not the same as quantum supremacy. Advantage usually implies practical usefulness; supremacy may refer to a narrow benchmark.',
      'A quantum result must be compared against strong classical baselines, not outdated algorithms.',
    ],
    relatedTerms: ['Quantum Supremacy', 'Quantum Volume', 'NISQ', 'Resource Estimation'],
  },
  {
    id: 'quantum-supremacy',
    title: 'Quantum Supremacy',
    subtitle: 'A benchmark where quantum outperforms classical simulation',
    difficulty: 'intermediate',
    tags: ['benchmarking', 'history', 'performance'],
    definition:
      'Quantum supremacy is a term for demonstrating that a quantum device can perform a specific computation that is infeasible for classical computers to reproduce in a reasonable time.',
    whyItMatters:
      'Supremacy experiments show scientific progress, but they may not solve a useful business problem. They are important benchmarks, not automatic product milestones.',
    analogy:
      'Like proving a race car can beat every normal car on a specialized track, even if it cannot yet deliver groceries better.',
    soundsSmartToSay:
      '"That is a supremacy-style benchmark, not necessarily practical quantum advantage for an application workload."',
    commonConfusions: [
      'The term is controversial and many people prefer quantum advantage for practical discussions.',
      'A supremacy experiment can be valid even if the task has no direct commercial use.',
    ],
    relatedTerms: ['Quantum Advantage', 'Quantum Volume', 'NISQ', 'Quantum Simulator'],
  },
  {
    id: 'quantum-shors-algorithm',
    title: 'Shor\'s Algorithm',
    subtitle: 'A quantum algorithm for factoring and discrete logarithms',
    difficulty: 'advanced',
    tags: ['algorithms', 'cryptography', 'factoring'],
    definition:
      'Shor\'s algorithm is a quantum algorithm that can factor large integers and solve discrete logarithm problems efficiently on a sufficiently large fault-tolerant quantum computer.',
    whyItMatters:
      'Shor\'s algorithm threatens widely used public-key cryptography such as RSA and elliptic-curve systems once capable quantum computers exist. It is a major driver of post-quantum cryptography migration.',
    analogy:
      'Like discovering a shortcut through a maze that makes certain locks much easier to open, but only after you have a powerful enough vehicle to use the shortcut.',
    soundsSmartToSay:
      '"Shor is not breaking RSA on today\'s noisy hardware, but it is why long-lived cryptographic data needs a quantum-safe migration plan now."',
    commonConfusions: [
      'Shor\'s algorithm does not break symmetric encryption in the same way it threatens RSA and elliptic-curve cryptography.',
      'The algorithm is known, but running it at cryptographic scale requires far more reliable quantum resources than current devices provide.',
    ],
    relatedTerms: ['Post-Quantum Cryptography', 'Quantum Fourier Transform', 'Fault-Tolerant Quantum Computing', 'Harvest Now, Decrypt Later'],
  },
  {
    id: 'quantum-grovers-algorithm',
    title: 'Grover\'s Algorithm',
    subtitle: 'A quadratic speedup for unstructured search',
    difficulty: 'advanced',
    tags: ['algorithms', 'search', 'amplitude amplification'],
    definition:
      'Grover\'s algorithm is a quantum search algorithm that can find a marked item in an unstructured space using roughly the square root of the number of classical checks.',
    whyItMatters:
      'Grover gives a broad but limited speedup. It affects security sizing for symmetric keys and hashing, but it is not the dramatic exponential break that Shor provides for public-key cryptography.',
    analogy:
      'Like searching a huge warehouse with a method that cuts the work from every aisle to about the square root of the aisles, still hard but meaningfully faster.',
    soundsSmartToSay:
      '"Grover suggests increasing symmetric key sizes, while Shor forces replacement of vulnerable public-key algorithms."',
    commonConfusions: [
      'Grover does not make all search instant. The speedup is quadratic, not exponential.',
      'Grover assumes access to an oracle that marks correct answers, which can be nontrivial to build for real problems.',
    ],
    relatedTerms: ['Quantum Interference', 'Post-Quantum Cryptography', 'Amplitude Amplification', 'Shor\'s Algorithm'],
  },
  {
    id: 'quantum-fourier-transform',
    title: 'Quantum Fourier Transform',
    subtitle: 'A quantum operation that extracts periodic structure',
    difficulty: 'advanced',
    tags: ['algorithms', 'periodicity', 'math'],
    definition:
      'The Quantum Fourier Transform, or QFT, is the quantum analogue of the discrete Fourier transform. It converts amplitude patterns into frequency-like information and is a key subroutine in algorithms such as Shor\'s.',
    whyItMatters:
      'The QFT shows how quantum algorithms can exploit hidden periodic structure. It is one of the mathematical primitives behind famous quantum speedups.',
    analogy:
      'Like turning a complex sound wave into its notes, except the transformation operates on quantum amplitudes.',
    soundsSmartToSay:
      '"The speedup comes from using QFT to reveal periodicity in amplitudes, not from brute-force trial division."',
    commonConfusions: [
      'QFT is not simply running a classical FFT faster. It transforms a quantum state and its output is accessed through measurement.',
      'QFT is powerful as part of a larger algorithm; by itself it is not a complete business application.',
    ],
    relatedTerms: ['Shor\'s Algorithm', 'Quantum Interference', 'Quantum Circuit', 'Phase Estimation'],
  },
  {
    id: 'quantum-vqe',
    title: 'Variational Quantum Eigensolver (VQE)',
    subtitle: 'A hybrid algorithm for estimating low-energy states',
    difficulty: 'advanced',
    tags: ['algorithms', 'chemistry', 'hybrid'],
    definition:
      'VQE is a hybrid quantum-classical algorithm where a quantum circuit prepares candidate states and a classical optimizer adjusts circuit parameters to estimate low-energy solutions, often for chemistry or materials problems.',
    whyItMatters:
      'VQE is one of the best-known NISQ-era algorithm families because it uses relatively short circuits and delegates optimization to classical computers.',
    analogy:
      'Like tuning a physical instrument while a measurement device tells you whether the sound is getting closer to the target note.',
    soundsSmartToSay:
      '"VQE is attractive for near-term chemistry experiments, but optimizer behavior and noise can make scaling difficult."',
    commonConfusions: [
      'VQE is not a guaranteed production advantage. It is a research approach whose usefulness depends on hardware, ansatz choice, and classical baselines.',
      'The quantum computer does not do the whole optimization alone. A classical loop updates parameters between quantum measurements.',
    ],
    relatedTerms: ['Hybrid Quantum-Classical Workflow', 'NISQ', 'Quantum Chemistry', 'QPU'],
  },
  {
    id: 'quantum-qaoa',
    title: 'QAOA',
    subtitle: 'A hybrid approach for combinatorial optimization',
    difficulty: 'advanced',
    tags: ['algorithms', 'optimization', 'hybrid'],
    definition:
      'QAOA, the Quantum Approximate Optimization Algorithm, uses parameterized quantum circuits and a classical optimizer to search for good approximate solutions to optimization problems.',
    whyItMatters:
      'Optimization is one of the most discussed quantum application areas. QAOA gives researchers a way to test whether near-term devices can help with structured optimization workloads.',
    analogy:
      'Like repeatedly adjusting the knobs on a search machine, measuring how good the candidate solution is, and using a classical coach to pick the next knob settings.',
    soundsSmartToSay:
      '"For QAOA, the key question is whether the quantum-classical loop beats strong classical heuristics on the actual problem size."',
    commonConfusions: [
      'QAOA does not automatically solve every optimization problem better than classical solvers.',
      'Approximate optimization means finding good solutions, not always proving the global optimum.',
    ],
    relatedTerms: ['Hybrid Quantum-Classical Workflow', 'Quantum Annealing', 'NISQ', 'Variational Quantum Eigensolver (VQE)'],
  },
  {
    id: 'quantum-annealing',
    title: 'Quantum Annealing',
    subtitle: 'A quantum approach to optimization landscapes',
    difficulty: 'intermediate',
    tags: ['optimization', 'annealing', 'hardware'],
    definition:
      'Quantum annealing is a model of quantum computation that tries to find low-energy states of an optimization problem by evolving a physical system toward a solution.',
    whyItMatters:
      'Quantum annealers are commercially accessible and are often explored for optimization problems, though they are different from universal gate-based quantum computers.',
    analogy:
      'Like shaking a tray of marbles so they settle into low points in a landscape, hoping the lowest valley represents a good solution.',
    soundsSmartToSay:
      '"That vendor is offering quantum annealing, so we should compare it with classical optimization heuristics and not assume it is equivalent to a gate-based QPU."',
    commonConfusions: [
      'Quantum annealing is not the same model as universal gate-based quantum computing.',
      'Mapping a business problem into an annealing formulation can be the hard part.',
    ],
    relatedTerms: ['Adiabatic Quantum Computing', 'QAOA', 'Optimization', 'Quantum Cloud Services'],
  },
  {
    id: 'quantum-adiabatic-computing',
    title: 'Adiabatic Quantum Computing',
    subtitle: 'Solving problems by slowly evolving a quantum system',
    difficulty: 'advanced',
    tags: ['models', 'optimization', 'annealing'],
    definition:
      'Adiabatic quantum computing encodes a problem in a final Hamiltonian and slowly evolves a quantum system from an easy initial state toward that problem state, aiming to remain in the ground state.',
    whyItMatters:
      'It is a major theoretical model behind quantum annealing and optimization discussions. It gives another way to think about computation beyond the gate model.',
    analogy:
      'Like lowering a flexible sheet over a landscape so it settles into the lowest valley without bouncing into the wrong basin.',
    soundsSmartToSay:
      '"Annealing hardware is inspired by adiabatic ideas, but real devices have noise and finite schedules that complicate the ideal theory."',
    commonConfusions: [
      'Adiabatic quantum computing is a model, while quantum annealing is often used for practical hardware approaches inspired by it.',
      'Slow evolution helps in theory, but practical runtime and energy gaps determine whether it is useful.',
    ],
    relatedTerms: ['Quantum Annealing', 'QAOA', 'Hamiltonian', 'Optimization'],
  },
  {
    id: 'quantum-hybrid-workflow',
    title: 'Hybrid Quantum-Classical Workflow',
    subtitle: 'Combining QPUs with classical optimization and control',
    difficulty: 'intermediate',
    tags: ['workflow', 'hybrid', 'cloud'],
    definition:
      'A hybrid quantum-classical workflow uses classical computers to prepare inputs, choose parameters, optimize results, and control the loop while a QPU performs specific quantum subroutines.',
    whyItMatters:
      'Most practical quantum experiments today are hybrid. The QPU is a specialized component inside a larger classical application, not a standalone replacement for the full workload.',
    analogy:
      'Like a lab test where a technician prepares samples, a specialized instrument takes measurements, and analysis software decides the next experiment.',
    soundsSmartToSay:
      '"The system architecture should treat the QPU as an accelerator in a classical workflow, with queues, retries, result processing, and experiment tracking."',
    commonConfusions: [
      'Hybrid does not mean quantum is doing half the work. Often the classical side does orchestration and optimization while quantum handles a narrow subroutine.',
      'Latency matters because cloud QPU access can involve queues and repeated circuit executions.',
    ],
    relatedTerms: ['Variational Quantum Eigensolver (VQE)', 'QAOA', 'QPU', 'Quantum Cloud Services'],
  },
  {
    id: 'quantum-sdks',
    title: 'Quantum SDKs (Qiskit / Cirq / Q#)',
    subtitle: 'Software tools for building and running quantum programs',
    difficulty: 'beginner',
    tags: ['developer tools', 'programming', 'cloud'],
    definition:
      'Quantum SDKs are developer toolkits for writing circuits or quantum programs, simulating them, compiling them, and submitting jobs to quantum hardware or cloud services. Examples include Qiskit, Cirq, and Q#.',
    whyItMatters:
      'SDKs make quantum experimentation accessible to software teams. They also hide some hardware details while exposing key constraints like gates, connectivity, shots, and backends.',
    analogy:
      'Like CUDA or a cloud SDK for a specialized accelerator, but with quantum-specific concepts such as circuits, measurements, and noise models.',
    soundsSmartToSay:
      '"Before picking a quantum SDK, we should check the target hardware, simulator support, transpiler behavior, and integration with our Python workflow."',
    commonConfusions: [
      'An SDK does not make the hardware fault-tolerant. It helps express and run programs within current hardware limits.',
      'Different SDKs may support different programming models, providers, and abstractions.',
    ],
    relatedTerms: ['Quantum Circuit', 'Quantum Compiler', 'Quantum Cloud Services', 'Quantum Simulator'],
  },
  {
    id: 'quantum-cloud-services',
    title: 'Quantum Cloud Services',
    subtitle: 'Accessing quantum hardware through cloud platforms',
    difficulty: 'beginner',
    tags: ['cloud', 'hardware access', 'workflow'],
    definition:
      'Quantum cloud services let users submit quantum programs to real QPUs, simulators, or resource estimation tools through cloud accounts and APIs. Providers often expose multiple backends with different hardware technologies.',
    whyItMatters:
      'Most organizations will access quantum computers through cloud platforms rather than owning dilution refrigerators or specialized lab equipment.',
    analogy:
      'Like renting time on a rare scientific instrument through a cloud portal instead of building the laboratory yourself.',
    soundsSmartToSay:
      '"Cloud access is useful for experiments, but queue times, backend calibration, shot limits, and data governance still need to be part of the plan."',
    commonConfusions: [
      'Quantum cloud access does not mean production-ready quantum advantage. It means access to available backends and tools.',
      'Simulator backends and hardware backends can produce different results because real devices are noisy.',
    ],
    relatedTerms: ['QPU', 'Quantum SDKs (Qiskit / Cirq / Q#)', 'Quantum Simulator', 'Hybrid Quantum-Classical Workflow'],
  },
  {
    id: 'quantum-superconducting-qubits',
    title: 'Superconducting Qubits',
    subtitle: 'Qubits built from superconducting circuits',
    difficulty: 'intermediate',
    tags: ['hardware', 'superconducting', 'qubits'],
    definition:
      'Superconducting qubits use tiny electrical circuits cooled to extremely low temperatures so quantum behavior can be controlled with microwave pulses.',
    whyItMatters:
      'Superconducting qubits are one of the most prominent quantum hardware approaches, used by several major research and cloud providers. They can have fast gates but require cryogenic systems and careful calibration.',
    analogy:
      'Like building an artificial atom out of a circuit and keeping it in an ultra-cold, quiet room so it behaves quantum mechanically.',
    soundsSmartToSay:
      '"Superconducting platforms offer fast gates, but scaling requires solving cryogenics, wiring, crosstalk, and error correction overhead."',
    commonConfusions: [
      'Superconducting does not mean room-temperature or resistance-free computing for normal workloads. The quantum processor needs specialized cryogenic control.',
      'Fast gates are valuable, but fidelity and connectivity also determine useful circuit depth.',
    ],
    relatedTerms: ['QPU', 'Qubit', 'Quantum Noise', 'Physical vs Logical Qubits'],
  },
  {
    id: 'quantum-trapped-ion-qubits',
    title: 'Trapped Ion Qubits',
    subtitle: 'Qubits encoded in isolated charged atoms',
    difficulty: 'intermediate',
    tags: ['hardware', 'ions', 'qubits'],
    definition:
      'Trapped ion qubits use charged atoms suspended by electromagnetic fields. Lasers manipulate and measure their quantum states, and ions can interact through shared motion.',
    whyItMatters:
      'Trapped ions are known for long coherence times and high-fidelity operations, though gates can be slower and scaling engineering is challenging.',
    analogy:
      'Like holding individual atoms in place with invisible tweezers and using carefully tuned light to compute with them.',
    soundsSmartToSay:
      '"Ion traps have excellent coherence, but we still need to evaluate gate speed, connectivity, and scaling architecture for the workload."',
    commonConfusions: [
      'Trapped ions and neutral atoms are different approaches. Ions are charged and controlled in electromagnetic traps.',
      'Long coherence time does not remove the need for error correction at large scale.',
    ],
    relatedTerms: ['QPU', 'Qubit', 'Quantum Gate', 'Quantum Decoherence'],
  },
  {
    id: 'quantum-photonic-computing',
    title: 'Photonic Quantum Computing',
    subtitle: 'Using particles of light as quantum information carriers',
    difficulty: 'intermediate',
    tags: ['hardware', 'photons', 'networking'],
    definition:
      'Photonic quantum computing encodes quantum information in photons, using optical components, detectors, and sometimes measurement-based approaches to process quantum states.',
    whyItMatters:
      'Photons are natural carriers for quantum communication and may support room-temperature components, but building reliable gates, sources, and detectors at scale is hard.',
    analogy:
      'Like computing with carefully prepared packets of light traveling through a miniature optical lab.',
    soundsSmartToSay:
      '"Photonic systems are compelling for networking and some scaling paths, but source quality, loss, and detector efficiency are central constraints."',
    commonConfusions: [
      'Photonic quantum computing is not the same as normal fiber networking. It uses quantum states of light, not just optical data transmission.',
      'Room-temperature components do not mean the whole system is simple or cheap to scale.',
    ],
    relatedTerms: ['Quantum Networking', 'QKD', 'QPU', 'Quantum Teleportation'],
  },
  {
    id: 'quantum-neutral-atom-qubits',
    title: 'Neutral Atom Qubits',
    subtitle: 'Qubits held in optical tweezer arrays',
    difficulty: 'intermediate',
    tags: ['hardware', 'atoms', 'scaling'],
    definition:
      'Neutral atom qubits use uncharged atoms trapped and arranged by laser light. Their interactions can be controlled by exciting atoms into special states, often called Rydberg states.',
    whyItMatters:
      'Neutral atom platforms are attractive because large arrays can be assembled and reconfigured, making them a serious candidate for scaling and simulation workloads.',
    analogy:
      'Like arranging individual atoms in a laser-made egg carton, then briefly exciting them so selected atoms interact.',
    soundsSmartToSay:
      '"Neutral atom systems are interesting for scale and geometry, but the application depends on control fidelity and how errors behave across the array."',
    commonConfusions: [
      'Neutral atom qubits are not trapped ion qubits. Neutral atoms have no net charge and are controlled differently.',
      'Large atom counts still need high-quality operations and error correction to become broadly useful.',
    ],
    relatedTerms: ['QPU', 'Quantum Simulation', 'Physical vs Logical Qubits', 'Quantum Gate'],
  },
  {
    id: 'quantum-topological-qubits',
    title: 'Topological Qubits',
    subtitle: 'A proposed hardware path with built-in error protection',
    difficulty: 'advanced',
    tags: ['hardware', 'research', 'error protection'],
    definition:
      'Topological qubits are a proposed approach that stores quantum information in global properties of exotic quantum states, aiming to make the information less sensitive to local noise.',
    whyItMatters:
      'If realized at scale, topological qubits could reduce error correction overhead. They remain a difficult research and engineering challenge.',
    analogy:
      'Like encoding a message in the shape of a knot rather than the position of one fragile thread segment.',
    soundsSmartToSay:
      '"Topological qubits are promising because of potential error protection, but the practical question is whether the hardware can demonstrate reliable, scalable operations."',
    commonConfusions: [
      'Topological qubits are not just another branding name for ordinary qubits. They rely on different physical ideas.',
      'Potential error protection does not remove all engineering or verification challenges.',
    ],
    relatedTerms: ['Qubit', 'Quantum Error Correction', 'Fault-Tolerant Quantum Computing', 'QPU'],
  },
  {
    id: 'quantum-sensing',
    title: 'Quantum Sensing',
    subtitle: 'Using quantum effects for extremely sensitive measurement',
    difficulty: 'beginner',
    tags: ['sensing', 'measurement', 'applications'],
    definition:
      'Quantum sensing uses quantum systems to measure physical quantities such as magnetic fields, gravity, time, acceleration, or temperature with very high sensitivity.',
    whyItMatters:
      'Quantum technology is not only about computers. Quantum sensors may deliver practical value sooner in navigation, medical imaging, geophysics, timing, and materials inspection.',
    analogy:
      'Like using a very delicate tuning fork that responds to tiny changes ordinary instruments might miss.',
    soundsSmartToSay:
      '"Quantum sensing may have nearer-term deployment paths than general-purpose fault-tolerant quantum computing."',
    commonConfusions: [
      'Quantum sensing is not the same as quantum computing. It uses quantum systems for measurement, not necessarily for algorithmic computation.',
      'High sensitivity can also mean sensitivity to unwanted environmental noise, so deployment context matters.',
    ],
    relatedTerms: ['Quantum Measurement', 'Quantum Noise', 'Quantum Technology', 'Qubit'],
  },
  {
    id: 'quantum-networking',
    title: 'Quantum Networking',
    subtitle: 'Moving quantum information between nodes',
    difficulty: 'advanced',
    tags: ['networking', 'entanglement', 'communication'],
    definition:
      'Quantum networking connects quantum devices using quantum states, often photons, to distribute entanglement or enable protocols such as quantum key distribution and teleportation.',
    whyItMatters:
      'Quantum networks could connect quantum processors, sensors, and secure communication systems. They are also a possible path toward distributed quantum computing.',
    analogy:
      'Like building a network where the packets are fragile quantum states that cannot be copied and retransmitted the normal way.',
    soundsSmartToSay:
      '"Quantum networking needs different assumptions from classical networking because qubits cannot be copied, amplified, or inspected without disturbing them."',
    commonConfusions: [
      'Quantum networks do not replace the internet for normal data. They support specialized quantum protocols.',
      'Classical communication is still required alongside many quantum networking protocols.',
    ],
    relatedTerms: ['Quantum Entanglement', 'QKD', 'Quantum Teleportation', 'No-Cloning Theorem'],
  },
  {
    id: 'quantum-qkd',
    title: 'Quantum Key Distribution (QKD)',
    subtitle: 'Using quantum states to detect key interception',
    difficulty: 'advanced',
    tags: ['security', 'networking', 'keys'],
    definition:
      'Quantum key distribution uses quantum communication protocols to help two parties establish a shared secret key while detecting eavesdropping attempts that disturb the quantum states.',
    whyItMatters:
      'QKD is a quantum security technology with different infrastructure requirements from post-quantum cryptography. It can be useful in specialized links but is not a drop-in replacement for internet-wide encryption.',
    analogy:
      'Like sending tamper-evident envelopes where looking inside leaves detectable marks.',
    soundsSmartToSay:
      '"QKD is link-level quantum key exchange; for broad software migration, post-quantum cryptography is the more deployable path."',
    commonConfusions: [
      'QKD and post-quantum cryptography are different. QKD needs quantum communication channels; PQC runs on classical systems.',
      'QKD does not solve all security problems. Authentication, endpoint security, and implementation risk still matter.',
    ],
    relatedTerms: ['Quantum Networking', 'Post-Quantum Cryptography', 'Quantum Measurement', 'Quantum-Safe Migration'],
  },
  {
    id: 'quantum-post-quantum-cryptography',
    title: 'Post-Quantum Cryptography',
    subtitle: 'Classical cryptography designed to resist quantum attacks',
    difficulty: 'intermediate',
    tags: ['security', 'cryptography', 'migration'],
    definition:
      'Post-quantum cryptography, or PQC, is cryptography that runs on classical computers but is designed to resist attacks from future cryptographically relevant quantum computers. Current standardization focuses on algorithms such as ML-KEM, ML-DSA, and SLH-DSA.',
    whyItMatters:
      'Organizations must migrate vulnerable public-key cryptography before large quantum computers exist because data encrypted today may be collected and decrypted later.',
    analogy:
      'Like replacing locks before a future lock-picking machine becomes widely available, especially for records that must stay private for years.',
    soundsSmartToSay:
      '"PQC is a classical software and protocol migration problem driven by future quantum risk, not something that requires us to deploy quantum computers."',
    commonConfusions: [
      'Post-quantum cryptography is not quantum cryptography. It uses classical algorithms believed to resist quantum attacks.',
      'PQC migration is not just swapping one library. Certificates, protocols, hardware security modules, inventories, and interoperability all need planning.',
    ],
    relatedTerms: ['Shor\'s Algorithm', 'Quantum-Safe Migration', 'Harvest Now, Decrypt Later', 'QKD'],
  },
  {
    id: 'quantum-safe-migration',
    title: 'Quantum-Safe Migration',
    subtitle: 'Moving systems away from quantum-vulnerable cryptography',
    difficulty: 'intermediate',
    tags: ['security', 'migration', 'cryptography'],
    definition:
      'Quantum-safe migration is the process of inventorying cryptography, prioritizing vulnerable systems, testing post-quantum algorithms, updating protocols, and deploying cryptographic agility so systems can withstand future quantum threats.',
    whyItMatters:
      'Large organizations have cryptography embedded in certificates, VPNs, browsers, devices, firmware, APIs, and archives. Migration takes years, so waiting for a large quantum computer is risky.',
    analogy:
      'Like replacing an old electrical standard across every building, device, and vendor contract before the old standard becomes unsafe.',
    soundsSmartToSay:
      '"The first step in quantum-safe migration is crypto inventory; we cannot replace algorithms we have not found."',
    commonConfusions: [
      'Quantum-safe does not mean permanently safe. It means resilient against known quantum-relevant attacks based on current standards and assumptions.',
      'Migration is not only a security team task. It affects infrastructure, applications, vendors, PKI, compliance, and product roadmaps.',
    ],
    relatedTerms: ['Post-Quantum Cryptography', 'Harvest Now, Decrypt Later', 'Cryptographic Agility', 'Shor\'s Algorithm'],
  },
  {
    id: 'quantum-harvest-now-decrypt-later',
    title: 'Harvest Now, Decrypt Later',
    subtitle: 'Stealing encrypted data now for future quantum decryption',
    difficulty: 'intermediate',
    tags: ['security', 'risk', 'cryptography'],
    definition:
      'Harvest now, decrypt later is the threat where attackers collect encrypted data today and store it until future quantum computers or other breakthroughs can decrypt it.',
    whyItMatters:
      'Data with long confidentiality lifetimes, such as health, government, financial, and intellectual property records, may need quantum-safe protection before quantum attacks are practical.',
    analogy:
      'Like stealing locked safes today because you expect a master key to exist in a few years.',
    soundsSmartToSay:
      '"For data that must remain confidential for ten or twenty years, harvest-now-decrypt-later risk makes PQC migration a current concern."',
    commonConfusions: [
      'This threat applies most strongly to data that remains valuable for a long time.',
      'It is not proof that current encrypted traffic is already readable. It is a planning risk based on future capability.',
    ],
    relatedTerms: ['Post-Quantum Cryptography', 'Quantum-Safe Migration', 'Shor\'s Algorithm', 'Data Classification'],
  },
  {
    id: 'quantum-random-number-generator',
    title: 'Quantum Random Number Generator',
    subtitle: 'Randomness sourced from quantum measurement',
    difficulty: 'beginner',
    tags: ['randomness', 'security', 'measurement'],
    definition:
      'A quantum random number generator uses inherently probabilistic quantum measurements to produce random values. The goal is high-quality entropy for cryptography, simulation, or security systems.',
    whyItMatters:
      'Bad randomness can break cryptography. Quantum randomness can provide strong entropy when implemented and validated correctly.',
    analogy:
      'Like rolling dice whose unpredictability comes from quantum measurement rather than ordinary mechanical complexity.',
    soundsSmartToSay:
      '"QRNG output still needs health tests and integration discipline; quantum source does not excuse weak entropy handling downstream."',
    commonConfusions: [
      'Quantum randomness does not automatically make a whole security system secure. Implementation, conditioning, and key management still matter.',
      'Pseudo-random generators and true random sources play different roles in cryptographic systems.',
    ],
    relatedTerms: ['Quantum Measurement', 'Cryptography', 'Post-Quantum Cryptography', 'QKD'],
  },
  {
    id: 'quantum-teleportation',
    title: 'Quantum Teleportation',
    subtitle: 'Transferring a quantum state using entanglement and classical bits',
    difficulty: 'advanced',
    tags: ['networking', 'entanglement', 'protocols'],
    definition:
      'Quantum teleportation is a protocol that transfers an unknown quantum state from one system to another using shared entanglement, measurement, and classical communication.',
    whyItMatters:
      'Teleportation is a foundational primitive for quantum networking and distributed quantum systems. It shows how entanglement and classical communication work together.',
    analogy:
      'Like moving the exact instructions for rebuilding a fragile state at another location, while the original is destroyed in the process.',
    soundsSmartToSay:
      '"Quantum teleportation moves a quantum state, not matter, and it still requires classical communication."',
    commonConfusions: [
      'Quantum teleportation is not science-fiction transport of objects or people.',
      'It does not allow faster-than-light communication because classical bits are required to complete the protocol.',
    ],
    relatedTerms: ['Quantum Entanglement', 'Quantum Networking', 'No-Cloning Theorem', 'QKD'],
  },
  {
    id: 'quantum-no-cloning',
    title: 'No-Cloning Theorem',
    subtitle: 'Unknown quantum states cannot be copied perfectly',
    difficulty: 'advanced',
    tags: ['theory', 'security', 'networking'],
    definition:
      'The no-cloning theorem says an arbitrary unknown quantum state cannot be copied perfectly. This is a fundamental difference between quantum and classical information.',
    whyItMatters:
      'No-cloning shapes quantum networking, error correction, cryptography, and debugging. You cannot copy qubits the way routers copy packets or developers copy bytes.',
    analogy:
      'Like having a document written in invisible ink that changes if you try to photocopy it without knowing the exact recipe.',
    soundsSmartToSay:
      '"No-cloning is why quantum repeaters and error correction are fundamentally different from classical retransmission and backup."',
    commonConfusions: [
      'No-cloning does not mean quantum error correction is impossible. Error correction protects encoded information without copying an unknown state directly.',
      'Known states can be prepared again; the theorem concerns arbitrary unknown quantum states.',
    ],
    relatedTerms: ['Quantum Error Correction', 'Quantum Networking', 'Quantum Teleportation', 'Qubit'],
  },
  {
    id: 'quantum-bell-test',
    title: 'Bell Test',
    subtitle: 'An experiment that tests nonclassical correlations',
    difficulty: 'advanced',
    tags: ['theory', 'entanglement', 'experiments'],
    definition:
      'A Bell test checks whether measured correlations between quantum systems can be explained by local hidden-variable theories. Violations of Bell inequalities support the nonclassical nature of entanglement.',
    whyItMatters:
      'Bell tests are foundational evidence that quantum mechanics is not just classical ignorance. They also underpin trust models in some quantum communication and randomness protocols.',
    analogy:
      'Like testing whether two distant game players are using a prewritten script or sharing correlations that classical rules cannot explain.',
    soundsSmartToSay:
      '"Bell tests are not just philosophy; they validate the kind of entanglement-based behavior quantum protocols rely on."',
    commonConfusions: [
      'A Bell test does not let people send messages faster than light.',
      'Bell inequality violations show nonclassical correlations, not that every quantum device is automatically useful for computing.',
    ],
    relatedTerms: ['Quantum Entanglement', 'QKD', 'Quantum Random Number Generator', 'No-Cloning Theorem'],
  },
  {
    id: 'quantum-resource-estimation',
    title: 'Resource Estimation',
    subtitle: 'Estimating qubits, gates, time, and error budgets for an algorithm',
    difficulty: 'advanced',
    tags: ['planning', 'architecture', 'fault tolerance'],
    definition:
      'Resource estimation predicts the quantum and classical resources needed to run an algorithm, including logical qubits, physical qubits, gate counts, circuit depth, runtime, and error correction overhead.',
    whyItMatters:
      'Resource estimates turn vague quantum claims into engineering plans. They help teams decide whether an application is plausible on near-term hardware or requires future fault-tolerant systems.',
    analogy:
      'Like sizing a data center project before buying hardware: racks, power, cooling, network, workload, and reliability targets all have to pencil out.',
    soundsSmartToSay:
      '"Before calling this quantum-ready, we need a resource estimate that includes error correction overhead and realistic hardware assumptions."',
    commonConfusions: [
      'A small demo circuit does not imply the real workload is feasible. Scaling can add enormous qubit and gate overhead.',
      'Resource estimates depend heavily on assumptions about error rates, compiler choices, and algorithm design.',
    ],
    relatedTerms: ['Fault-Tolerant Quantum Computing', 'Physical vs Logical Qubits', 'Quantum Error Correction', 'Quantum Cloud Services'],
  },
];

export const quantumCards: Card[] = quantumCardSeeds.map((card) => ({
  ...card,
  domain: 'quantum',
}));
