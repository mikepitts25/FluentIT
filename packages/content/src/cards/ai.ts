import type { Card } from '../types';

export const aiCards: Card[] = [
  {
    id: 'ai-llm',
    domain: 'ai',
    title: 'LLM',
    subtitle: 'Large Language Model — the engine behind AI assistants',
    difficulty: 'beginner',
    tags: ['foundation model', 'GPT', 'inference'],
    definition:
      'An LLM is a neural network trained on massive text datasets to predict and generate text. It learns statistical relationships between words and concepts — enabling it to answer questions, write code, summarize documents, and reason through problems.',
    whyItMatters:
      'LLMs are reshaping every software category. Understanding their capabilities (few-shot learning, instruction following, code generation) and limitations (hallucinations, knowledge cutoffs, context limits) is essential for evaluating AI tooling.',
    analogy:
      'Like an extremely well-read colleague who has read almost every book, paper, and website ever written. They can discuss any topic fluently but occasionally confidently state something false — and they have a knowledge cutoff date.',
    soundsSmartToSay:
      '"We need to evaluate whether RAG or fine-tuning is the right approach for this use case — they solve different problems."',
    commonConfusions: [
      'LLM vs AI: LLMs are one type of AI model. AI is the broad field; LLMs are specifically text-based neural language models.',
      'LLMs hallucinate — they generate plausible-sounding but incorrect information. This is a fundamental property of probabilistic text generation, not a bug that will be fully fixed.',
    ],
    relatedTerms: ['RAG', 'Fine-tuning', 'Tokens', 'Context Window'],
  },
  {
    id: 'ai-rag',
    domain: 'ai',
    title: 'RAG',
    subtitle: 'Retrieval-Augmented Generation',
    difficulty: 'intermediate',
    tags: ['retrieval', 'embeddings', 'grounding'],
    definition:
      'RAG is a technique that retrieves relevant documents from an external knowledge base (using vector search) and inserts them into the LLM prompt as context — so the model answers based on your data, not just its training data.',
    whyItMatters:
      'LLMs have a knowledge cutoff and don\'t know about your internal docs, customer data, or recent events. RAG lets you augment the model with any data you want — without the cost and complexity of fine-tuning.',
    analogy:
      "Like giving an expert witness a set of relevant case files to review before testifying — they apply their expertise (LLM reasoning) to your specific evidence (retrieved documents) rather than relying on memory alone.",
    soundsSmartToSay:
      '"For our internal knowledge base use case, RAG is the right call — fine-tuning would teach the model new knowledge but wouldn\'t give it the ability to cite current docs."',
    commonConfusions: [
      'RAG vs fine-tuning: RAG retrieves information at inference time. Fine-tuning bakes information into model weights. RAG is better for factual recall from a changing corpus; fine-tuning is better for style, behavior, and domain-specific reasoning.',
      'RAG requires an embedding model (to encode documents and queries into vectors) and a vector database (to store and search those vectors). Pinecone, Weaviate, pgvector are common choices.',
    ],
    relatedTerms: ['Vector Database', 'Embeddings', 'Fine-tuning', 'Context Window'],
  },
  {
    id: 'ai-embeddings',
    domain: 'ai',
    title: 'Embeddings',
    subtitle: 'Turning text into searchable numbers',
    difficulty: 'intermediate',
    tags: ['vectors', 'semantic search', 'similarity'],
    definition:
      'Embeddings are numerical representations (vectors) of text, images, or other data where semantically similar items have similar vectors. An embedding model converts text into a vector (e.g., 1536 numbers) that captures its meaning.',
    whyItMatters:
      'Embeddings enable semantic search ("find documents similar in meaning, not just keyword match"), recommendation systems, clustering, and RAG pipelines — any system that needs to measure similarity between content.',
    analogy:
      'Like a map where similar cities are near each other — even though "New York" and "NYC" look different as text, their embeddings would be nearly identical. "Dog" and "cat" would be close; "dog" and "quantum physics" would be far apart.',
    soundsSmartToSay:
      '"We should embed the user\'s search query and compare it to precomputed document embeddings — keyword search is missing results where the user uses different terminology than the document."',
    commonConfusions: [
      'Embeddings vs tokens: Tokens are the input chunks the LLM processes (words or sub-words). Embeddings are the vector representations of those tokens (or entire chunks of text). Different step, different purpose.',
      'Embedding models (text-embedding-3, Cohere Embed) are separate from generative models (GPT-4, Claude). They are optimized for similarity, not generation.',
    ],
    relatedTerms: ['Vector Database', 'Cosine Similarity', 'RAG', 'Semantic Search'],
  },
  {
    id: 'ai-inference',
    domain: 'ai',
    title: 'Inference vs Training',
    subtitle: 'Running a model vs building one',
    difficulty: 'beginner',
    tags: ['training', 'inference', 'GPU'],
    definition:
      'Training is the compute-intensive process of building a model — adjusting billions of parameters by showing the model data. Inference is running a trained model on a new input to get a response. Most engineers deal with inference, not training.',
    whyItMatters:
      'Understanding this split clarifies why AI is expensive (training runs cost millions), why inference can be optimized (quantization, batching, caching), and why most teams use foundation models via APIs rather than training their own.',
    analogy:
      'Training is like going through years of medical school — exhausting, expensive, and done once. Inference is seeing a patient — applying learned skills to a new case, done thousands of times a day.',
    soundsSmartToSay:
      '"Serving our own open-source model on GPU instances vs using an API — we need to run the numbers on inference cost per token to know which is cheaper at our volume."',
    commonConfusions: [
      'Most companies don\'t train LLMs — they run inference on models trained by Anthropic, OpenAI, Google, or Meta. "We use AI" almost always means inference via API or self-hosted model.',
      'Inference optimization: quantization (4-bit, 8-bit) reduces GPU memory for open-source models. Speculative decoding, KV caching, and batching reduce latency and cost.',
    ],
    relatedTerms: ['GPU', 'Fine-tuning', 'Quantization', 'Latency vs Throughput'],
  },
  {
    id: 'ai-agentic',
    domain: 'ai',
    title: 'AI Agents',
    subtitle: 'LLMs that take actions, not just generate text',
    difficulty: 'intermediate',
    tags: ['agents', 'tools', 'orchestration'],
    definition:
      'An AI agent is an LLM equipped with tools (web search, code execution, API calls, file access) and a loop that lets it plan, take actions, observe results, and iterate — completing multi-step tasks autonomously.',
    whyItMatters:
      'Chat interfaces require a human at every step. Agents can execute long workflows autonomously — writing and running code, browsing the web, filling forms, and making API calls — with the human only reviewing the final result.',
    analogy:
      'Like the difference between asking a consultant to advise you (single response) vs hiring a contractor who reads the spec, buys materials, does the work, and reports back when done — asking clarifying questions along the way.',
    soundsSmartToSay:
      '"For this use case we want a human in the loop — fully autonomous agents are powerful but the error blast radius is too high without review steps."',
    commonConfusions: [
      'Agents vs simple LLM calls: A single LLM call is not an agent. An agent has an execution loop, tools, and memory — it can observe the world and adapt its plan.',
      'Agent frameworks (LangChain, CrewAI, AutoGPT, Claude Agents SDK) handle the orchestration. The LLM is the reasoning engine; the framework manages the tool-use loop.',
    ],
    relatedTerms: ['Tool Use', 'ReAct Pattern', 'MCP', 'Orchestration'],
  },
  {
    id: 'ai-gpu',
    domain: 'ai',
    title: 'GPUs in AI',
    subtitle: 'Why graphics cards run AI',
    difficulty: 'beginner',
    tags: ['GPU', 'compute', 'CUDA'],
    definition:
      'GPUs (Graphics Processing Units) excel at the parallel matrix multiplication operations that power neural network training and inference. Where a CPU has 8–128 powerful cores, a GPU has thousands of simpler cores for simultaneous operations.',
    whyItMatters:
      'AI workloads cannot run efficiently on CPUs at scale. GPU availability is a real constraint — training clusters require hundreds of A100/H100 GPUs, and inference serving often requires dedicated GPU instances.',
    analogy:
      'Like moving from a single expert mathematician (CPU) to a room of thousands of students all doing arithmetic simultaneously (GPU). The expert is better at complex individual problems; the room is better at massive parallel computation.',
    soundsSmartToSay:
      '"Our inference serving cost is dominated by H100 GPU time — we should evaluate quantizing to INT8 to fit more model replicas per GPU."',
    commonConfusions: [
      'NVIDIA vs AMD: NVIDIA GPUs dominate AI due to CUDA, the parallel computing platform that all major ML frameworks (PyTorch, TensorFlow) are optimized for. AMD GPUs use ROCm — less mature ecosystem.',
      'TPUs (Google) and specialized AI chips (AWS Trainium/Inferentia, Apple Neural Engine) are alternatives to GPU. Cloud TPUs can be more cost-efficient for specific workloads.',
    ],
    relatedTerms: ['CUDA', 'H100', 'Tensor Core', 'FLOPS'],
  },
  {
    id: 'ai-prompt-engineering',
    domain: 'ai',
    title: 'Prompt Engineering',
    subtitle: 'Crafting inputs to get reliable LLM outputs',
    difficulty: 'beginner',
    tags: ['prompting', 'few-shot', 'chain-of-thought'],
    definition:
      'Prompt engineering is the practice of designing and refining the text input to an LLM to reliably produce desired outputs. Techniques include system prompts, few-shot examples, chain-of-thought instructions, and output format constraints.',
    whyItMatters:
      'The same model can behave very differently based on how it is prompted. Well-engineered prompts increase accuracy, reduce hallucinations, control output format, and establish personas — without changing the model.',
    analogy:
      'Like giving instructions to a contractor — vague instructions get inconsistent results. Specific, structured instructions with examples get reproducible, high-quality output.',
    soundsSmartToSay:
      '"We should add chain-of-thought prompting for our classification task — asking the model to reason step-by-step before classifying significantly reduces errors."',
    commonConfusions: [
      'Prompt engineering vs fine-tuning: Prompting works without modifying the model. Fine-tuning changes model weights. Prompting is faster and cheaper; fine-tuning can achieve better quality for specific tasks.',
      'System prompt vs user prompt: The system prompt sets the context, persona, and constraints. The user prompt is the actual request. Most production LLM systems use both.',
    ],
    relatedTerms: ['System Prompt', 'Few-Shot Learning', 'Chain-of-Thought', 'Temperature'],
  },
  {
    id: 'ai-mlops',
    domain: 'ai',
    title: 'MLOps',
    subtitle: 'DevOps for machine learning models',
    difficulty: 'intermediate',
    tags: ['deployment', 'monitoring', 'drift'],
    definition:
      'MLOps applies DevOps practices to machine learning — versioning models and data, automating training pipelines, monitoring model performance in production, and triggering retraining when accuracy degrades.',
    whyItMatters:
      'A model trained once and deployed forever degrades as the world changes. MLOps ensures models are retrained on fresh data, evaluated against baselines, deployed safely, and monitored for accuracy drift.',
    analogy:
      'Like maintaining a car — not just building it once. Regular oil changes (retraining), performance checks (evaluation), and dashboard alerts (monitoring) keep the model performing reliably.',
    soundsSmartToSay:
      '"We need to implement data drift monitoring — if the distribution of incoming requests shifts from what the model was trained on, we need to know before accuracy tanks."',
    commonConfusions: [
      'MLOps vs LLMOps: Traditional MLOps is for custom ML models (training loops, feature stores, model registries). LLMOps handles LLM-specific concerns like prompt management, eval at scale, and RAG pipeline monitoring.',
      'Model drift types: Data drift (input distribution changed). Concept drift (the relationship between inputs and outputs changed). Both cause model accuracy to degrade silently.',
    ],
    relatedTerms: ['Feature Store', 'Model Registry', 'Data Drift', 'A/B Testing'],
  },
];
