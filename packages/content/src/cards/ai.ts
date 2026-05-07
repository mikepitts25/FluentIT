import type { Card } from '../types';

export const aiCards: Card[] = [
  // ── Foundation ──────────────────────────────────────────────
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
    id: 'ai-transformer',
    domain: 'ai',
    title: 'Transformer Architecture',
    subtitle: 'The architecture that powers modern AI',
    difficulty: 'intermediate',
    tags: ['attention', 'architecture', 'self-attention'],
    definition:
      'The Transformer is a neural network architecture introduced in 2017 that processes input in parallel using a mechanism called self-attention. Instead of reading text sequentially, it weighs how every word relates to every other word simultaneously — enabling massive parallelization and superior context understanding.',
    whyItMatters:
      'Every major LLM (GPT, Claude, Gemini, Llama) is a Transformer. Understanding the architecture explains why context windows have limits, why longer prompts cost more, and why GPUs are essential — attention scales quadratically with sequence length.',
    analogy:
      'Like a room full of people where everyone can hear everyone else simultaneously, rather than a phone chain where each person only hears the previous speaker. This parallel listening is why Transformers understand context so much better than older sequential models.',
    soundsSmartToSay:
      '"The quadratic attention cost is why doubling the context window is more than twice as expensive — that\'s the fundamental Transformer scaling challenge."',
    commonConfusions: [
      'Transformer vs GPT: GPT (Generative Pre-trained Transformer) is a specific model built on the Transformer architecture. Transformer is the underlying architecture used by many different models.',
      'Self-attention is the key innovation — it lets the model learn which words in a sentence are most relevant to each other, regardless of their position.',
    ],
    relatedTerms: ['LLM', 'Self-Attention', 'Context Window', 'Neural Network'],
  },
  {
    id: 'ai-neural-network',
    domain: 'ai',
    title: 'Neural Networks',
    subtitle: 'The building block of modern AI',
    difficulty: 'beginner',
    tags: ['deep learning', 'layers', 'weights'],
    definition:
      'A neural network is a computing system inspired by the brain, composed of layers of interconnected nodes (neurons). Each connection has a weight that is adjusted during training. Data flows through input layers, hidden layers, and output layers — with each layer learning to recognize increasingly abstract patterns.',
    whyItMatters:
      'Neural networks underpin all modern AI — image recognition, language models, recommendation systems, self-driving cars. "Deep learning" just means neural networks with many layers. When someone says "the model," they mean a neural network with trained weights.',
    analogy:
      'Like a factory assembly line where each station adds a layer of refinement. Raw materials (pixels, words) enter at one end; finished products (classifications, generated text) come out the other. Each station specializes in detecting specific patterns.',
    soundsSmartToSay:
      '"The model has 70 billion parameters — that\'s the number of weights across all layers that were tuned during training."',
    commonConfusions: [
      'Parameters vs hyperparameters: Parameters (weights) are learned by the model during training. Hyperparameters (learning rate, batch size, number of layers) are set by the engineer before training.',
      'Deep learning vs machine learning: Deep learning is a subset of ML that uses neural networks with many layers. Not all ML uses neural networks (e.g., random forests, SVMs).',
    ],
    relatedTerms: ['Deep Learning', 'Parameters', 'Training', 'Backpropagation'],
  },
  {
    id: 'ai-tokens',
    domain: 'ai',
    title: 'Tokens & Tokenization',
    subtitle: 'How LLMs break down text',
    difficulty: 'beginner',
    tags: ['tokenizer', 'BPE', 'vocabulary'],
    definition:
      'Tokens are the chunks that an LLM processes — roughly 3/4 of a word on average. Tokenization is the process of splitting text into these chunks. "Unbelievable" might become ["Un", "believ", "able"]. LLMs think in tokens, not words — pricing, context limits, and speed are all measured in tokens.',
    whyItMatters:
      'Token counts directly affect cost (API pricing is per token), speed (more tokens = slower), and capability (context window is a token limit). Understanding tokenization explains why some languages cost more, why code uses more tokens than prose, and why there are input/output price differences.',
    analogy:
      'Like how a telegraph operator charges per word but counts contractions as two words. The "words" an LLM sees are slightly different from human words, and that difference affects everything from cost to quality.',
    soundsSmartToSay:
      '"Our average request is about 2,000 tokens input and 500 output — at current pricing that\'s roughly $0.02 per call, so we need to optimize the system prompt to reduce input tokens."',
    commonConfusions: [
      'Tokens are NOT words. "ChatGPT" is 3 tokens. Spaces and punctuation are tokens. A 1,000-word document is roughly 1,300 tokens. Code and non-English languages typically use more tokens per character.',
      'Input tokens vs output tokens: Most providers charge less for input tokens (reading) than output tokens (generating). This is why system prompts with cached prefixes can be very cost-efficient.',
    ],
    relatedTerms: ['Context Window', 'BPE', 'Prompt Engineering', 'API Pricing'],
  },
  {
    id: 'ai-context-window',
    domain: 'ai',
    title: 'Context Window',
    subtitle: 'How much an LLM can read at once',
    difficulty: 'beginner',
    tags: ['context length', 'memory', 'attention'],
    definition:
      'The context window is the maximum number of tokens an LLM can process in a single request — including both the input (system prompt + user message + documents) and the output. Modern models range from 8K to 1M+ tokens. Everything outside the context window is invisible to the model.',
    whyItMatters:
      'Context window size determines what you can fit in a single prompt. Too small and you cannot include enough documents for RAG. Too large and costs skyrocket. Many production architectures revolve around efficiently using the context window — chunking documents, summarizing history, and caching common prefixes.',
    analogy:
      'Like the size of a desk. A bigger desk lets you spread out more reference papers while writing, but the papers still need to be organized and relevant. Having a mile-wide desk doesn\'t help if you pile it with irrelevant documents.',
    soundsSmartToSay:
      '"We\'re using 200K context but only hitting relevant passages — we should benchmark whether RAG with a smaller context actually gives better results than stuffing the full document in."',
    commonConfusions: [
      'Bigger context ≠ better results. Models can struggle with information in the middle of very long contexts ("lost in the middle" problem). Strategic placement of key information matters.',
      'Context window includes BOTH input and output tokens. A 128K context model generating a 4K response effectively has 124K for input.',
    ],
    relatedTerms: ['Tokens', 'RAG', 'Prompt Engineering', 'Lost in the Middle'],
  },
  {
    id: 'ai-temperature',
    domain: 'ai',
    title: 'Temperature & Sampling',
    subtitle: 'Controlling randomness in LLM outputs',
    difficulty: 'intermediate',
    tags: ['temperature', 'top-p', 'top-k', 'sampling'],
    definition:
      'Temperature controls how random an LLM\'s output is. At temperature 0, the model always picks the most likely next token (deterministic). At higher temperatures (0.7–1.0), it samples more creatively from less likely tokens. Top-p (nucleus sampling) and top-k are related controls that limit which tokens are considered.',
    whyItMatters:
      'Different tasks need different randomness. Code generation and data extraction want low temperature (accurate, consistent). Creative writing and brainstorming want higher temperature (diverse, surprising). Getting this wrong causes either boring/repetitive or unreliable/hallucinated outputs.',
    analogy:
      'Like a chef deciding how adventurous to be. Temperature 0 = always make the classic recipe. Temperature 1 = experiment with unusual ingredient combinations. Both have their place, but you don\'t want experimental cooking for a wedding cake.',
    soundsSmartToSay:
      '"Set temperature to 0 for our extraction pipeline — we need deterministic, reproducible outputs. For the brainstorming feature, bump it to 0.8."',
    commonConfusions: [
      'Temperature 0 is not truly deterministic in all APIs — some still have minor randomness. For truly reproducible outputs, also set a seed parameter if the API supports it.',
      'Top-p vs temperature: They both control randomness but differently. Temperature scales the probability distribution; top-p truncates it. Using both simultaneously can have unexpected interactions.',
    ],
    relatedTerms: ['Inference', 'Sampling', 'Prompt Engineering', 'Tokens'],
  },

  // ── Training & Tuning ──────────────────────────────────────
  {
    id: 'ai-fine-tuning',
    domain: 'ai',
    title: 'Fine-tuning',
    subtitle: 'Customizing a model for your specific task',
    difficulty: 'intermediate',
    tags: ['training', 'LoRA', 'PEFT', 'adaptation'],
    definition:
      'Fine-tuning takes a pre-trained foundation model and continues training it on your specific dataset — adjusting the model\'s weights to improve performance on a particular task, domain, or output style. Techniques like LoRA (Low-Rank Adaptation) make this feasible without retraining the full model.',
    whyItMatters:
      'When prompt engineering hits its limits — the model doesn\'t match your style, struggles with domain jargon, or can\'t follow complex output formats — fine-tuning is the next tool. It is particularly valuable for consistent output formatting, domain-specific terminology, and reducing prompt size.',
    analogy:
      'Like sending a general practitioner to a specialized residency. They already know medicine (pre-training) but now learn the specific procedures and vocabulary of cardiology (fine-tuning). They don\'t forget general medicine; they layer specialization on top.',
    soundsSmartToSay:
      '"We fine-tuned with LoRA on 5,000 examples — the adapter is only 50MB and we can swap it out without redeploying the base model."',
    commonConfusions: [
      'Fine-tuning vs RAG: Fine-tuning changes how the model behaves (style, format, reasoning). RAG changes what it knows (adding external data at inference time). They solve different problems and are often used together.',
      'LoRA vs full fine-tuning: LoRA freezes most model weights and only trains small adapter matrices — dramatically reducing compute cost and allowing multiple task-specific adapters on one base model.',
    ],
    relatedTerms: ['LoRA', 'Transfer Learning', 'RAG', 'Training Data'],
  },
  {
    id: 'ai-rlhf',
    domain: 'ai',
    title: 'RLHF',
    subtitle: 'Reinforcement Learning from Human Feedback',
    difficulty: 'advanced',
    tags: ['alignment', 'reward model', 'preference'],
    definition:
      'RLHF is the training technique that makes LLMs helpful, harmless, and conversational. After pre-training on text prediction, the model is fine-tuned using human preferences: humans rank model outputs from best to worst, a reward model learns those preferences, and reinforcement learning optimizes the LLM to produce outputs the reward model scores highly.',
    whyItMatters:
      'Raw pre-trained LLMs are poor conversational assistants — they might continue text instead of answering, generate toxic content, or ignore instructions. RLHF is what turns a text predictor into a useful AI assistant. It is the key differentiator between base models and chat models.',
    analogy:
      'Like training a new employee by showing them examples of good and bad customer service responses, then having them practice with a mentor who scores their work. Over time they internalize what "good" looks like without needing to be told every rule.',
    soundsSmartToSay:
      '"The base model has the knowledge but the RLHF-tuned version follows instructions much more reliably — the alignment training is what makes it production-ready."',
    commonConfusions: [
      'RLHF vs SFT (Supervised Fine-Tuning): SFT trains on ideal responses directly. RLHF trains on preferences between responses. Most modern models use both: SFT first, then RLHF to polish.',
      'RLAIF (RL from AI Feedback) uses another AI model instead of humans for the preference ranking — faster and cheaper, used by Anthropic\'s Constitutional AI approach.',
    ],
    relatedTerms: ['AI Alignment', 'Reward Model', 'Constitutional AI', 'Fine-tuning'],
  },
  {
    id: 'ai-transfer-learning',
    domain: 'ai',
    title: 'Transfer Learning',
    subtitle: 'Reusing learned knowledge for new tasks',
    difficulty: 'intermediate',
    tags: ['pre-training', 'adaptation', 'foundation'],
    definition:
      'Transfer learning takes a model trained on one task (e.g., predicting the next word in internet text) and applies its learned representations to a different task (e.g., classifying medical documents). The model transfers its general knowledge rather than learning from scratch — vastly reducing the data and compute needed for the new task.',
    whyItMatters:
      'Transfer learning is why foundation models are so powerful. Training GPT-4 from scratch costs $100M+. Fine-tuning it for your task costs hundreds of dollars. The pre-trained knowledge transfers, so you only need to teach the delta.',
    analogy:
      'Like a multilingual person learning a new language — they already understand grammar, sentence structure, and communication patterns. They transfer those meta-skills rather than learning everything from zero.',
    soundsSmartToSay:
      '"We don\'t need to train a model from scratch — we can leverage transfer learning from a foundation model and fine-tune on our 10,000 labeled examples."',
    commonConfusions: [
      'Transfer learning vs fine-tuning: Transfer learning is the concept (reusing learned knowledge). Fine-tuning is one technique for applying transfer learning (continuing training on new data).',
      'Zero-shot and few-shot learning are forms of transfer learning — the model applies pre-trained knowledge to tasks it was never explicitly trained on.',
    ],
    relatedTerms: ['Fine-tuning', 'Foundation Model', 'Pre-training', 'Few-Shot Learning'],
  },

  // ── RAG & Retrieval ─────────────────────────────────────────
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
    id: 'ai-vector-db',
    domain: 'ai',
    title: 'Vector Database',
    subtitle: 'Purpose-built storage for AI similarity search',
    difficulty: 'intermediate',
    tags: ['Pinecone', 'Weaviate', 'pgvector', 'HNSW'],
    definition:
      'A vector database stores high-dimensional vectors (embeddings) and enables fast similarity search — finding the most similar vectors to a query vector. Purpose-built vector DBs (Pinecone, Weaviate, Qdrant, Milvus) or extensions (pgvector for PostgreSQL) power RAG, recommendation, and search systems.',
    whyItMatters:
      'RAG pipelines need sub-second retrieval across millions of document embeddings. Traditional databases can\'t efficiently search high-dimensional vector spaces. Vector databases use specialized indexes (HNSW, IVF) to make nearest-neighbor search fast.',
    analogy:
      'Like a library organized by concept similarity rather than alphabetically. Instead of looking up a specific title, you describe what you want and the librarian instantly finds the most relevant books — even if they use different words than your description.',
    soundsSmartToSay:
      '"We\'re using pgvector for now since we\'re already on Postgres and our corpus is under a million documents — if we need to scale beyond that, we\'ll evaluate a dedicated vector DB."',
    commonConfusions: [
      'Vector DB vs traditional DB: You don\'t query a vector DB with SQL (usually). You query it with a vector and it returns the K most similar vectors. Some (Weaviate, pgvector) support hybrid search combining vector similarity with keyword filters.',
      'You still need a regular database for your application data. Vector DBs are a supplementary store for embeddings, not a replacement for PostgreSQL or MongoDB.',
    ],
    relatedTerms: ['Embeddings', 'RAG', 'Cosine Similarity', 'HNSW'],
  },
  {
    id: 'ai-semantic-search',
    domain: 'ai',
    title: 'Semantic Search',
    subtitle: 'Search by meaning, not keywords',
    difficulty: 'intermediate',
    tags: ['search', 'NLP', 'embeddings', 'relevance'],
    definition:
      'Semantic search finds results based on meaning rather than exact keyword matches. It uses embeddings to understand that "how to fix a broken pipe" (plumbing) and "resolving a broken pipe error" (programming) are different queries — even though they share keywords. The query and documents are compared as vectors in semantic space.',
    whyItMatters:
      'Traditional keyword search misses synonyms, paraphrases, and conceptual matches. Semantic search handles natural language queries, reduces zero-result searches, and powers intelligent document retrieval in RAG systems.',
    analogy:
      'Like asking a knowledgeable librarian vs using a card catalog. The card catalog only matches exact words. The librarian understands what you mean and finds relevant books even when you don\'t use the right terminology.',
    soundsSmartToSay:
      '"We should implement hybrid search — semantic for recall and keyword (BM25) for precision. The reranker will combine and sort the final results."',
    commonConfusions: [
      'Semantic search vs keyword search: They are complementary, not replacements. Keyword search (BM25, TF-IDF) is better for exact matches, product names, and codes. Semantic search is better for natural language queries and concept matching.',
      'A reranker (like Cohere Rerank) is often used after initial retrieval to re-score results for relevance — combining the speed of vector search with the precision of cross-encoder models.',
    ],
    relatedTerms: ['Embeddings', 'Vector Database', 'RAG', 'BM25'],
  },
  {
    id: 'ai-cosine-similarity',
    domain: 'ai',
    title: 'Cosine Similarity',
    subtitle: 'Measuring how similar two vectors are',
    difficulty: 'intermediate',
    tags: ['distance', 'vectors', 'similarity'],
    definition:
      'Cosine similarity measures the angle between two vectors, returning a value from -1 (opposite) to 1 (identical). In AI, it\'s the standard way to compare embeddings — two documents with cosine similarity of 0.95 are very similar in meaning; 0.3 means loosely related.',
    whyItMatters:
      'Every RAG pipeline, recommendation system, and semantic search uses cosine similarity (or a variant) to rank results. Understanding it helps you set similarity thresholds, debug retrieval quality, and evaluate embedding model performance.',
    analogy:
      'Like comparing the direction two compasses point, ignoring how far you walk. Two compasses pointing in nearly the same direction (high cosine similarity) indicate similar content, even if the documents are very different lengths.',
    soundsSmartToSay:
      '"Our retrieval threshold is set at 0.8 cosine similarity — anything below that and the chunks aren\'t relevant enough to include in the prompt."',
    commonConfusions: [
      'Cosine similarity vs Euclidean distance: Cosine measures angle (direction), Euclidean measures straight-line distance. For normalized embeddings they rank identically, but cosine is preferred because it\'s length-invariant.',
      'A cosine similarity of 0.9 doesn\'t mean "90% similar" — the scale is non-linear and depends on the embedding model. Always benchmark thresholds on your specific data.',
    ],
    relatedTerms: ['Embeddings', 'Vector Database', 'Semantic Search', 'Distance Metrics'],
  },

  // ── Inference & Deployment ──────────────────────────────────
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
    id: 'ai-quantization',
    domain: 'ai',
    title: 'Quantization',
    subtitle: 'Shrinking models to run on less hardware',
    difficulty: 'advanced',
    tags: ['optimization', 'INT8', 'INT4', 'GPTQ', 'GGUF'],
    definition:
      'Quantization reduces a model\'s precision — converting 16-bit floating point weights to 8-bit or 4-bit integers. This dramatically shrinks memory usage (a 70B model goes from 140GB to 35GB at 4-bit) and speeds up inference, with a modest quality trade-off.',
    whyItMatters:
      'Running LLMs locally or on smaller GPUs requires quantization. A full-precision Llama 70B needs multiple $30K GPUs. Quantized to 4-bit, it fits on a single consumer GPU. This is what makes local AI and edge deployment practical.',
    analogy:
      'Like compressing a high-resolution photo to JPEG. You lose some fine detail, but the image is recognizable at a fraction of the file size. For most uses, the quality loss is acceptable.',
    soundsSmartToSay:
      '"We\'re running the GPTQ 4-bit quantized version — it fits on a single A10G and the quality difference from FP16 is negligible for our classification task."',
    commonConfusions: [
      'Quantization formats: GPTQ (GPU-optimized), GGUF (CPU/GPU, used by llama.cpp), AWQ (activation-aware, better quality). Different formats work with different inference engines.',
      'Not all tasks tolerate quantization equally. Simple classification survives 4-bit well. Complex reasoning and math degrade more noticeably. Always benchmark on YOUR task.',
    ],
    relatedTerms: ['Inference', 'GPU', 'Model Serving', 'GGUF'],
  },
  {
    id: 'ai-model-distillation',
    domain: 'ai',
    title: 'Model Distillation',
    subtitle: 'Training a small model to mimic a large one',
    difficulty: 'advanced',
    tags: ['knowledge distillation', 'teacher-student', 'compression'],
    definition:
      'Model distillation trains a smaller "student" model to replicate the behavior of a larger "teacher" model. The student learns from the teacher\'s output probabilities (soft labels), not just the original training data — capturing richer information than hard labels alone provide.',
    whyItMatters:
      'Running GPT-4-class models in production is expensive. Distillation lets you create a model that is 10–100x smaller and cheaper but retains 90%+ of the teacher\'s quality on your specific task. Many production AI systems use distilled models.',
    analogy:
      'Like an experienced surgeon training a resident by demonstrating procedures. The resident doesn\'t need 20 years of experience — they learn the surgeon\'s techniques and judgment directly, compressing years of learning into months.',
    soundsSmartToSay:
      '"We distilled Claude\'s outputs into a fine-tuned Llama 8B for our classification pipeline — 95% of the accuracy at 1/50th the cost per inference."',
    commonConfusions: [
      'Distillation vs fine-tuning: Fine-tuning trains on labeled data. Distillation trains on the teacher model\'s outputs, which contain richer information (probability distributions over all possible answers, not just the correct one).',
      'Many "small" commercial models are actually distilled from larger ones. The model card usually doesn\'t say this explicitly.',
    ],
    relatedTerms: ['Fine-tuning', 'Quantization', 'Small Language Models', 'Inference Cost'],
  },
  {
    id: 'ai-mixture-of-experts',
    domain: 'ai',
    title: 'Mixture of Experts (MoE)',
    subtitle: 'Only activating the relevant parts of a model',
    difficulty: 'advanced',
    tags: ['MoE', 'sparse', 'routing', 'efficiency'],
    definition:
      'MoE is an architecture where a model has many specialized sub-networks (experts) but a router only activates a few for each input. A model might have 8 experts but only use 2 per token — so it has the knowledge of a huge model but the inference cost of a smaller one.',
    whyItMatters:
      'MoE explains how some models (Mixtral, likely GPT-4) achieve frontier performance with lower inference costs. Understanding MoE helps evaluate model trade-offs: MoE models need more RAM (all experts are loaded) but less compute per token.',
    analogy:
      'Like a hospital with many specialist departments. When a patient arrives, triage routes them to the relevant 1–2 departments rather than having every doctor examine them. The hospital has broad expertise but each patient is handled efficiently.',
    soundsSmartToSay:
      '"Mixtral is a MoE model — it has 46B total parameters but only activates 13B per token, which is why inference is so much faster than a dense 46B model."',
    commonConfusions: [
      'Total parameters vs active parameters: MoE models quote total parameters (all experts combined) but active parameters (per token) are much lower. A "47B MoE" model might only use 13B parameters per token.',
      'MoE models need more memory than their active parameter count suggests, because all experts must be loaded into memory even though only a few are used at a time.',
    ],
    relatedTerms: ['Transformer', 'Inference', 'Model Architecture', 'Sparse Models'],
  },
  {
    id: 'ai-model-serving',
    domain: 'ai',
    title: 'Model Serving',
    subtitle: 'Running AI models in production',
    difficulty: 'intermediate',
    tags: ['vLLM', 'TGI', 'Triton', 'deployment'],
    definition:
      'Model serving is the infrastructure for running AI models as production services — handling concurrent requests, batching inputs for GPU efficiency, managing model loading/unloading, and scaling with demand. Tools like vLLM, TGI (Text Generation Inference), and Triton Inference Server are purpose-built for this.',
    whyItMatters:
      'Naive model inference wastes GPU resources. Production serving frameworks use continuous batching, KV cache management, and PagedAttention to serve 10x more requests per GPU — the difference between a viable product and an unprofitable one.',
    analogy:
      'Like the difference between a restaurant where one chef makes one meal at a time vs a professional kitchen that batches orders, prepares ingredients in parallel, and manages multiple dishes simultaneously on the same equipment.',
    soundsSmartToSay:
      '"We\'re using vLLM with PagedAttention — it manages the KV cache efficiently so we can serve 3x more concurrent users on the same GPU cluster."',
    commonConfusions: [
      'vLLM vs TGI vs Triton: vLLM is Python-native and easiest to start with. TGI (Hugging Face) is production-hardened with built-in streaming. Triton (NVIDIA) is the most flexible but most complex, supporting non-LLM models too.',
      'Using an API (OpenAI, Anthropic) vs self-hosting: APIs avoid all serving complexity. Self-hosting only makes sense at high volume, for data privacy, or for open-source models not available via API.',
    ],
    relatedTerms: ['Inference', 'GPU', 'Quantization', 'Latency'],
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
    id: 'ai-prompt-caching',
    domain: 'ai',
    title: 'Prompt Caching',
    subtitle: 'Reusing computed context to save cost and latency',
    difficulty: 'intermediate',
    tags: ['caching', 'KV cache', 'optimization', 'cost'],
    definition:
      'Prompt caching stores the computed internal state (KV cache) of a prompt prefix so that subsequent requests with the same prefix skip reprocessing those tokens. If your system prompt is 10,000 tokens, caching means you only pay to process it once — subsequent requests reuse the cached computation.',
    whyItMatters:
      'Large system prompts, few-shot examples, and document contexts are repeated across requests. Prompt caching can reduce latency by 80%+ and cost by 90%+ for the cached portion. It is essential for production LLM applications with substantial system prompts.',
    analogy:
      'Like a professor who has already read the textbook. Each student doesn\'t need to re-explain the background material — they just ask their specific question, and the professor applies the already-processed knowledge.',
    soundsSmartToSay:
      '"Our system prompt is 8K tokens — with prompt caching enabled, those are processed once and reused across all requests, cutting our per-request cost by 60%."',
    commonConfusions: [
      'Prompt caching is not semantic caching (caching the response to similar questions). It caches the computation of the prompt prefix, not the output. Every request still generates a fresh response.',
      'The cached prefix must be an exact match — even one changed character invalidates the cache. Structure prompts with static content first, dynamic content last.',
    ],
    relatedTerms: ['Tokens', 'Context Window', 'Inference', 'System Prompt'],
  },

  // ── Agentic AI & Tools ──────────────────────────────────────
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
    id: 'ai-tool-use',
    domain: 'ai',
    title: 'Tool Use / Function Calling',
    subtitle: 'Letting LLMs interact with external systems',
    difficulty: 'intermediate',
    tags: ['function calling', 'tools', 'API', 'structured output'],
    definition:
      'Tool use (or function calling) lets an LLM request that external functions be executed — like searching a database, calling an API, running code, or reading a file. The model outputs a structured tool call (function name + arguments), the system executes it, and the result is fed back to the model.',
    whyItMatters:
      'LLMs can\'t access the internet, query databases, or perform calculations natively. Tool use bridges this gap — turning an LLM from a text generator into a system that can take actions in the real world. It\'s the foundation of all agent architectures.',
    analogy:
      'Like a manager who delegates tasks. They can\'t personally check the database or send an email, but they can instruct their assistant (the tool system) to do it and then use the results to make decisions.',
    soundsSmartToSay:
      '"We defined three tools for the agent: search_docs, create_ticket, and send_notification. The model decides which to call based on the user\'s request — we handle execution and return results."',
    commonConfusions: [
      'The model doesn\'t execute tools — it outputs a request to use a tool (function name + JSON arguments). Your code executes the function and returns the result. The model reasons about what to call, not how to call it.',
      'Parallel tool use: Modern models can request multiple tool calls simultaneously. Your system should support executing them in parallel for performance.',
    ],
    relatedTerms: ['AI Agents', 'MCP', 'Structured Output', 'API Integration'],
  },
  {
    id: 'ai-mcp',
    domain: 'ai',
    title: 'MCP',
    subtitle: 'Model Context Protocol — USB-C for AI tools',
    difficulty: 'intermediate',
    tags: ['protocol', 'integration', 'tools', 'context'],
    definition:
      'MCP (Model Context Protocol) is an open standard for connecting AI models to external data sources and tools. It defines a universal protocol so any AI application can connect to any data source — instead of building custom integrations for each AI + tool combination.',
    whyItMatters:
      'Before MCP, every AI app needed custom code to connect to each tool (Slack, GitHub, databases). MCP creates a standard interface — build one MCP server for your tool and every MCP-compatible AI client can use it. This is how AI assistants gain access to your systems.',
    analogy:
      'Like USB-C for AI integrations. Before USB-C, every device had a different charger. MCP is the universal connector — build a server once, and any compatible AI client can plug in.',
    soundsSmartToSay:
      '"We should expose our internal API as an MCP server — that way any AI tool the team uses (Claude, Cursor, Claude Code) can interact with our systems through a standard interface."',
    commonConfusions: [
      'MCP server vs MCP client: MCP servers expose tools and data (your database, API, file system). MCP clients are AI applications that consume them (Claude Desktop, IDE extensions). One server can serve many clients.',
      'MCP is not an API. It\'s a protocol that wraps your API in a standard format that AI models understand — including tool descriptions, parameter schemas, and authentication.',
    ],
    relatedTerms: ['Tool Use', 'AI Agents', 'API Integration', 'Protocol'],
  },
  {
    id: 'ai-react-pattern',
    domain: 'ai',
    title: 'ReAct Pattern',
    subtitle: 'Reasoning + Acting in a loop',
    difficulty: 'advanced',
    tags: ['reasoning', 'agents', 'chain-of-thought', 'loop'],
    definition:
      'ReAct (Reasoning + Acting) is an agent pattern where the LLM alternates between thinking (reasoning about what to do next) and acting (calling tools or taking actions). Each cycle: Thought → Action → Observation → Thought → Action — until the task is complete.',
    whyItMatters:
      'ReAct is the dominant pattern for building reliable AI agents. The explicit reasoning step helps the model plan before acting, reducing errors. The observation step lets it adapt based on real results, not assumptions.',
    analogy:
      'Like a detective investigating a case: think about what evidence to gather → go collect it → review what you found → think about what it means and what to do next. Each cycle brings you closer to solving the case.',
    soundsSmartToSay:
      '"Our agent uses a ReAct loop with a 10-step limit — each step the model reasons about progress, decides the next tool call, and evaluates the result before continuing."',
    commonConfusions: [
      'ReAct vs Chain-of-Thought: Chain-of-thought is pure reasoning within a single LLM call. ReAct adds action (tool use) and observation (tool results) to create an interactive loop across multiple calls.',
      'Most agent frameworks implement ReAct implicitly. When you hear "agent loop" or "tool use loop," they\'re describing ReAct.',
    ],
    relatedTerms: ['AI Agents', 'Tool Use', 'Chain-of-Thought', 'Orchestration'],
  },
  {
    id: 'ai-multi-agent',
    domain: 'ai',
    title: 'Multi-Agent Systems',
    subtitle: 'Multiple AI agents collaborating on a task',
    difficulty: 'advanced',
    tags: ['multi-agent', 'orchestration', 'collaboration', 'swarm'],
    definition:
      'Multi-agent systems use multiple specialized AI agents that communicate and collaborate to solve complex tasks. Each agent has a role (researcher, coder, reviewer, planner) and they coordinate through message passing — like a team of AI specialists working together.',
    whyItMatters:
      'Complex tasks benefit from decomposition. A single agent doing research, coding, and testing is less reliable than specialized agents each doing what they\'re best at. Multi-agent systems also enable parallel execution and diverse perspectives (one agent reviews another\'s work).',
    analogy:
      'Like a film production crew. The director doesn\'t do everything — the cinematographer handles camera work, the editor handles post-production, and the sound engineer handles audio. Each specialist focuses on their role, coordinated by the director.',
    soundsSmartToSay:
      '"We use a multi-agent setup — one agent plans the approach, another writes the code, and a third reviews it for security issues before the PR is created."',
    commonConfusions: [
      'Multi-agent vs single agent with tools: If one LLM calls tools sequentially, that\'s a single agent. Multi-agent means multiple LLM instances with different system prompts and capabilities communicating with each other.',
      'Frameworks: CrewAI, AutoGen (Microsoft), LangGraph, and Claude Agent SDK support multi-agent patterns. The orchestration overhead is real — start with a single agent and add agents only when complexity demands it.',
    ],
    relatedTerms: ['AI Agents', 'Orchestration', 'ReAct Pattern', 'Claude Agent SDK'],
  },

  // ── LLM Capabilities ───────────────────────────────────────
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
    id: 'ai-hallucinations',
    domain: 'ai',
    title: 'Hallucinations',
    subtitle: 'When AI confidently makes things up',
    difficulty: 'beginner',
    tags: ['accuracy', 'reliability', 'grounding', 'safety'],
    definition:
      'Hallucination is when an LLM generates plausible-sounding but factually incorrect information. It might invent citations, fabricate statistics, describe nonexistent API methods, or misattribute quotes — all with the same confident tone as accurate responses.',
    whyItMatters:
      'Hallucinations are the #1 barrier to trusting AI in production. Any system that presents LLM output to users or takes automated actions must account for hallucination risk through grounding (RAG), verification, citations, and confidence signals.',
    analogy:
      'Like an eager student who always raises their hand, even when they don\'t know the answer. They\'ll confidently give a plausible-sounding response rather than say "I don\'t know" — because they\'re optimized for fluency, not accuracy.',
    soundsSmartToSay:
      '"We need grounding for this use case — the model should cite specific documents and we should validate claims against our knowledge base before showing them to users."',
    commonConfusions: [
      'Hallucinations are not bugs that will be fully fixed — they\'re inherent to how probabilistic language models work. Better models hallucinate less, but never zero. System design must account for them.',
      'Grounding vs hallucination: Grounding techniques (RAG, tool use, citations) reduce hallucination by giving the model factual sources to reference rather than relying on training data alone.',
    ],
    relatedTerms: ['RAG', 'Grounding', 'AI Safety', 'Guardrails'],
  },
  {
    id: 'ai-structured-output',
    domain: 'ai',
    title: 'Structured Output',
    subtitle: 'Getting JSON, not prose, from an LLM',
    difficulty: 'intermediate',
    tags: ['JSON mode', 'schema', 'parsing', 'reliability'],
    definition:
      'Structured output constrains an LLM to produce output matching a specific schema — typically JSON with defined fields. Instead of hoping the model formats correctly, the API guarantees the output is valid JSON conforming to your schema. Anthropic, OpenAI, and others offer this as an API feature.',
    whyItMatters:
      'Production systems need machine-readable output, not free-form text. Structured output eliminates parsing failures, reduces prompt engineering for format compliance, and ensures downstream code always receives the expected data structure.',
    analogy:
      'Like a tax form vs a blank sheet of paper. The form (schema) has specific fields that must be filled in. The respondent can\'t write a free-form essay — they must put the right data in the right boxes.',
    soundsSmartToSay:
      '"Use structured output with a JSON schema for the extraction pipeline — it guarantees the response matches our data model and eliminates the regex parsing we were doing."',
    commonConfusions: [
      'JSON mode vs structured output: JSON mode ensures valid JSON. Structured output ensures JSON matching a specific schema. Structured output is strictly more powerful.',
      'Structured output does NOT prevent hallucinated values — it ensures the format is correct, but a field like "company_revenue" could still contain a hallucinated number.',
    ],
    relatedTerms: ['Tool Use', 'API Integration', 'Prompt Engineering', 'Data Extraction'],
  },
  {
    id: 'ai-reasoning-models',
    domain: 'ai',
    title: 'Reasoning Models',
    subtitle: 'AI that thinks before answering',
    difficulty: 'intermediate',
    tags: ['chain-of-thought', 'thinking', 'o1', 'extended thinking'],
    definition:
      'Reasoning models use extended chain-of-thought processing — spending more compute "thinking" through a problem before generating an answer. Unlike standard models that answer immediately, reasoning models (Claude with extended thinking, OpenAI o1/o3) break complex problems into steps, consider alternatives, and self-correct.',
    whyItMatters:
      'Reasoning models dramatically improve performance on math, logic, coding, and multi-step problems. They trade latency and cost for accuracy — taking 30 seconds to think can turn a wrong answer into a correct one. Understanding when to use them vs standard models is a key architectural decision.',
    analogy:
      'Like the difference between answering a question off the top of your head vs taking out a scratch pad, working through the problem step by step, and checking your work before answering.',
    soundsSmartToSay:
      '"For our complex data analysis pipeline, we should use a reasoning model — the extra latency is worth it because accuracy matters more than speed here."',
    commonConfusions: [
      'Reasoning models are not always better. For simple tasks (summarization, translation, chat), standard models are faster, cheaper, and equally accurate. Reasoning models shine on hard problems that benefit from step-by-step thinking.',
      'The "thinking" tokens in reasoning models are real compute — they consume tokens and affect cost. A model that thinks for 2,000 tokens before a 100-token answer costs more than a direct 100-token answer.',
    ],
    relatedTerms: ['Chain-of-Thought', 'Extended Thinking', 'Prompt Engineering', 'Inference Cost'],
  },
  {
    id: 'ai-multimodal',
    domain: 'ai',
    title: 'Multimodal Models',
    subtitle: 'AI that sees, reads, and hears',
    difficulty: 'intermediate',
    tags: ['vision', 'audio', 'image', 'multimodal'],
    definition:
      'Multimodal models process multiple types of input — text, images, audio, video, and documents — within a single model. Instead of separate models for vision and language, a multimodal model understands an image and can discuss it, transcribe audio and answer questions about it, or analyze a PDF and extract structured data.',
    whyItMatters:
      'Real-world tasks are multimodal. Analyzing a screenshot, reading a chart, transcribing a meeting, processing a scanned document — these require a model that can see and read. Multimodal models eliminate the need for separate OCR, speech-to-text, and image classification pipelines.',
    analogy:
      'Like a person who can both see and read. Earlier AI models were like someone blindfolded (text-only) or speechless (vision-only). Multimodal models can look at a photo and describe it, read a document and answer questions about it.',
    soundsSmartToSay:
      '"We can skip the OCR pipeline entirely — the multimodal model reads the scanned invoice directly and extracts the fields we need in a single call."',
    commonConfusions: [
      'Multimodal input vs output: Most current models accept multiple input types but output text only. True multimodal output (generating images, audio) is a separate capability (DALL-E, Suno, etc.).',
      'Vision quality varies by model and task. Test with YOUR images — performance on benchmarks doesn\'t always predict performance on specific document types, charts, or handwriting.',
    ],
    relatedTerms: ['Computer Vision', 'OCR', 'LLM', 'Document AI'],
  },

  // ── Generative AI ──────────────────────────────────────────
  {
    id: 'ai-diffusion-models',
    domain: 'ai',
    title: 'Diffusion Models',
    subtitle: 'How AI generates images and video',
    difficulty: 'intermediate',
    tags: ['image generation', 'Stable Diffusion', 'DALL-E', 'Midjourney'],
    definition:
      'Diffusion models generate images by starting with random noise and gradually removing it to reveal an image matching a text description. During training, the model learns to reverse the process of adding noise to images. At generation time, it starts from pure noise and iteratively denoises it, guided by the text prompt.',
    whyItMatters:
      'Diffusion models power the AI image generation revolution — DALL-E, Midjourney, Stable Diffusion, and video generators like Sora. Understanding how they work helps evaluate quality, limitations (hands, text in images, consistency), and cost.',
    analogy:
      'Like a sculptor starting with a rough block of marble (noise) and gradually chipping away to reveal the statue (image) described by the client (prompt). Each step removes a bit more randomness to reveal more detail.',
    soundsSmartToSay:
      '"We should use Stable Diffusion XL for our product mockup generator — it runs on our own infrastructure so we own the outputs and can fine-tune it on our brand imagery."',
    commonConfusions: [
      'Diffusion models vs GANs: GANs generate images in one shot. Diffusion models generate through many iterative denoising steps (20–50 typically). Diffusion models currently produce higher quality but are slower.',
      'Stable Diffusion is open source (can run locally). DALL-E and Midjourney are closed-source API services. This distinction matters for cost, control, and IP ownership.',
    ],
    relatedTerms: ['GANs', 'Text-to-Image', 'Computer Vision', 'Multimodal'],
  },
  {
    id: 'ai-gans',
    domain: 'ai',
    title: 'GANs',
    subtitle: 'Generative Adversarial Networks — the forger and the detective',
    difficulty: 'intermediate',
    tags: ['generative', 'adversarial', 'image generation'],
    definition:
      'A GAN consists of two neural networks competing against each other: a generator that creates fake data (images, audio) and a discriminator that tries to detect fakes. Through this adversarial training, the generator learns to produce increasingly realistic outputs.',
    whyItMatters:
      'GANs pioneered realistic AI image generation and remain important for style transfer, image-to-image translation, data augmentation, and deepfakes. While diffusion models have overtaken them for text-to-image, GANs are still used in production for real-time applications due to their speed.',
    analogy:
      'Like a counterfeiter and a detective training each other. The counterfeiter gets better at making fake bills; the detective gets better at spotting them. Eventually, the counterfeiter produces fakes that are nearly indistinguishable from real currency.',
    soundsSmartToSay:
      '"For real-time face filters, GANs are still the better choice — they generate in a single forward pass, while diffusion models need dozens of denoising steps."',
    commonConfusions: [
      'GANs vs diffusion models: GANs are faster (one pass) but harder to train (mode collapse, training instability). Diffusion models are slower but more stable and produce higher quality for text-to-image.',
      'GANs are behind deepfakes — the same technology enables face-swapping video. Understanding GANs is key to understanding AI-generated media.',
    ],
    relatedTerms: ['Diffusion Models', 'Deepfakes', 'Neural Networks', 'Image Generation'],
  },
  {
    id: 'ai-deepfakes',
    domain: 'ai',
    title: 'Deepfakes',
    subtitle: 'AI-generated synthetic media',
    difficulty: 'beginner',
    tags: ['synthetic media', 'misinformation', 'detection', 'ethics'],
    definition:
      'Deepfakes are AI-generated or AI-manipulated media — face-swapped videos, cloned voices, fabricated images of events that never happened. They use GANs, diffusion models, and voice synthesis to create convincing fake content that is increasingly difficult to distinguish from real media.',
    whyItMatters:
      'Deepfakes are a major cybersecurity and disinformation threat. They\'re used in social engineering attacks (fake CEO voice calls), political misinformation, and fraud. Every IT professional should understand the threat landscape and detection techniques.',
    analogy:
      'Like Photoshop but for video and audio, automated by AI, and getting easier every month. What once required a Hollywood VFX studio can now be done with consumer hardware in minutes.',
    soundsSmartToSay:
      '"We should add voice verification as a second factor for high-value transactions — deepfake voice cloning is now good enough to fool humans with just 15 seconds of sample audio."',
    commonConfusions: [
      'Not all AI-generated content is a deepfake. Deepfakes specifically refer to media designed to deceive — impersonating real people or fabricating events. AI art and synthetic voices used transparently are not deepfakes.',
      'Detection is an arms race. Current detectors look for artifacts (inconsistent lighting, unnatural blinking, audio glitches), but as generation improves, detection becomes harder. Provenance systems (C2PA) that track media origin may be more sustainable than detection.',
    ],
    relatedTerms: ['GANs', 'Social Engineering', 'AI Ethics', 'Content Authenticity'],
  },

  // ── Traditional ML ─────────────────────────────────────────
  {
    id: 'ai-supervised-unsupervised',
    domain: 'ai',
    title: 'Supervised vs Unsupervised Learning',
    subtitle: 'The two fundamental approaches to training models',
    difficulty: 'beginner',
    tags: ['classification', 'clustering', 'regression', 'labels'],
    definition:
      'Supervised learning trains on labeled data (input → known output) to learn predictions. Examples: spam detection (email → spam/not-spam), price prediction (features → price). Unsupervised learning finds patterns in unlabeled data — clustering, anomaly detection, dimensionality reduction.',
    whyItMatters:
      'This is the most fundamental distinction in ML. It determines what data you need (labeled = expensive, unlabeled = cheap), what problems you can solve, and which algorithms apply. Most production ML is supervised; most data exploration is unsupervised.',
    analogy:
      'Supervised: like studying with an answer key — you know the right answer for each practice problem. Unsupervised: like sorting a pile of photos into groups without anyone telling you the categories — you discover the structure yourself.',
    soundsSmartToSay:
      '"We don\'t have labeled data for this anomaly detection use case, so we need an unsupervised approach — isolation forest or autoencoder would work. If we can get labels, switching to supervised would improve accuracy."',
    commonConfusions: [
      'LLM pre-training is self-supervised — a hybrid where the training signal comes from the data itself (predict the next word). It doesn\'t need human labels, but it has a supervision signal.',
      'Semi-supervised learning uses a small amount of labeled data + lots of unlabeled data. This is practical when labeling is expensive but unlabeled data is plentiful.',
    ],
    relatedTerms: ['Classification', 'Clustering', 'Regression', 'Neural Networks'],
  },
  {
    id: 'ai-reinforcement-learning',
    domain: 'ai',
    title: 'Reinforcement Learning',
    subtitle: 'Learning through trial, error, and rewards',
    difficulty: 'intermediate',
    tags: ['RL', 'reward', 'policy', 'environment'],
    definition:
      'Reinforcement learning (RL) trains an agent to make decisions by rewarding desired behaviors and penalizing undesired ones. The agent interacts with an environment, takes actions, receives rewards, and learns a policy (strategy) that maximizes cumulative reward over time.',
    whyItMatters:
      'RL powers game-playing AI (AlphaGo, OpenAI Five), robotics, recommendation systems, and the RLHF step that makes LLMs useful assistants. It is the framework for any problem where an AI must make sequential decisions with delayed feedback.',
    analogy:
      'Like training a dog with treats. The dog (agent) tries different behaviors (actions) in the house (environment). When it sits on command, it gets a treat (reward). Over time, it learns which behaviors lead to treats and adopts those as its default policy.',
    soundsSmartToSay:
      '"The RLHF step in LLM training is literally reinforcement learning — the reward model scores the LLM\'s outputs, and the RL optimizer adjusts the LLM to produce higher-scoring responses."',
    commonConfusions: [
      'RL vs supervised learning: Supervised learning has correct answers for every example. RL has delayed, sparse rewards — the agent must figure out which actions in a long sequence led to the reward.',
      'RL is notoriously hard to apply in production. Outside of games, robotics, and LLM alignment, most teams are better served by supervised or unsupervised approaches.',
    ],
    relatedTerms: ['RLHF', 'Policy', 'Reward Model', 'AlphaGo'],
  },
  {
    id: 'ai-overfitting',
    domain: 'ai',
    title: 'Overfitting & Underfitting',
    subtitle: 'When a model memorizes vs when it fails to learn',
    difficulty: 'beginner',
    tags: ['generalization', 'regularization', 'bias-variance'],
    definition:
      'Overfitting is when a model performs well on training data but poorly on new data — it memorized the training set rather than learning general patterns. Underfitting is when a model is too simple to capture the patterns — it performs poorly on both training and new data.',
    whyItMatters:
      'Every ML project struggles with this trade-off. Overfitting means your impressive training metrics won\'t hold in production. Understanding it explains why you need validation sets, why regularization exists, and why more data usually helps.',
    analogy:
      'Overfitting: like a student who memorizes every practice exam answer but can\'t solve new problems. Underfitting: like a student who only learned addition and can\'t handle the algebra test. The sweet spot is understanding the underlying concepts.',
    soundsSmartToSay:
      '"Our training accuracy is 99% but validation is 72% — classic overfitting. We should add dropout, reduce model capacity, or get more training data."',
    commonConfusions: [
      'More data is the best cure for overfitting. Regularization (dropout, weight decay, data augmentation) helps when more data isn\'t available. A bigger model with more data usually generalizes better than a smaller model with the same data.',
      'For LLMs, overfitting during fine-tuning is common with small datasets. If the model starts parroting training examples verbatim, you\'ve overfit.',
    ],
    relatedTerms: ['Regularization', 'Validation Set', 'Generalization', 'Training'],
  },
  {
    id: 'ai-feature-engineering',
    domain: 'ai',
    title: 'Feature Engineering',
    subtitle: 'Turning raw data into model inputs',
    difficulty: 'intermediate',
    tags: ['features', 'data prep', 'feature store', 'preprocessing'],
    definition:
      'Feature engineering is the process of transforming raw data into informative inputs for a model. It includes selecting relevant columns, creating derived features (e.g., "days since last purchase"), encoding categories, normalizing scales, and handling missing values. Good features often matter more than model choice.',
    whyItMatters:
      'In traditional ML, feature engineering is where most value is created. A simple model with great features outperforms a complex model with raw data. Even in the LLM era, feature engineering is critical for embeddings, recommendation systems, and tabular ML.',
    analogy:
      'Like a chef preparing ingredients before cooking. Raw carrots, onions, and garlic are the data. Dicing, sauteing, and seasoning them (feature engineering) transforms them into something the recipe (model) can use effectively.',
    soundsSmartToSay:
      '"Before choosing a model, let\'s invest in feature engineering — adding interaction features and time-based aggregations improved our baseline model by 15% without any model changes."',
    commonConfusions: [
      'Feature engineering vs feature selection: Engineering creates new features from raw data. Selection chooses which features to keep. Both are important — too many features can cause overfitting.',
      'Feature stores (Feast, Tecton) are infrastructure for managing, versioning, and serving features consistently across training and production. They prevent training-serving skew.',
    ],
    relatedTerms: ['Data Preprocessing', 'Feature Store', 'Training Data', 'ML Pipeline'],
  },
  {
    id: 'ai-computer-vision',
    domain: 'ai',
    title: 'Computer Vision',
    subtitle: 'Teaching machines to see',
    difficulty: 'beginner',
    tags: ['CNN', 'image classification', 'object detection', 'segmentation'],
    definition:
      'Computer vision (CV) is the field of AI that enables machines to interpret visual data — images and video. Key tasks include image classification (what\'s in this image?), object detection (where are the objects?), segmentation (pixel-level boundaries), and pose estimation (body/hand positions).',
    whyItMatters:
      'CV powers autonomous vehicles, medical imaging, manufacturing quality control, security cameras, AR/VR, and document processing. It is one of the most commercially deployed branches of AI with direct revenue impact.',
    analogy:
      'Like teaching someone to read, but for images. The model learns to recognize patterns — first edges and textures (low-level features), then parts of objects (mid-level), then whole objects and scenes (high-level).',
    soundsSmartToSay:
      '"We should use YOLO for real-time object detection on the video feed — it runs at 30 FPS on a consumer GPU, which is fast enough for our inspection pipeline."',
    commonConfusions: [
      'CNNs vs Vision Transformers (ViT): CNNs were the dominant CV architecture for a decade. Vision Transformers (applying the Transformer architecture to images) now match or exceed CNNs on most tasks, especially with large datasets.',
      'Multimodal LLMs (Claude, GPT-4V) can do many CV tasks without specialized training. For simple image understanding, an API call to a multimodal model often beats building a custom CV pipeline.',
    ],
    relatedTerms: ['CNN', 'Object Detection', 'Multimodal Models', 'Image Classification'],
  },
  {
    id: 'ai-nlp',
    domain: 'ai',
    title: 'NLP',
    subtitle: 'Natural Language Processing — AI that understands text',
    difficulty: 'beginner',
    tags: ['text', 'language', 'sentiment', 'NER', 'classification'],
    definition:
      'Natural Language Processing (NLP) is the branch of AI focused on understanding and generating human language. Key tasks include sentiment analysis, named entity recognition (NER), text classification, machine translation, summarization, and question answering.',
    whyItMatters:
      'NLP powers chatbots, search engines, email filters, translation services, and content moderation. LLMs are the latest evolution of NLP — they can do most traditional NLP tasks in a single model via prompting, replacing dozens of specialized models.',
    analogy:
      'Like teaching a computer to be a polyglot linguist who can read, write, translate, summarize, and understand the sentiment and intent behind any text in any language.',
    soundsSmartToSay:
      '"For sentiment analysis at our scale, we can skip training a custom model — a prompted LLM with structured output gives us 95% accuracy with zero training data."',
    commonConfusions: [
      'Traditional NLP vs LLMs: Pre-2020, NLP meant training task-specific models (one for sentiment, one for NER, one for translation). LLMs collapsed these into one model. But specialized NLP models are still faster and cheaper for high-volume single-task use cases.',
      'NLP vs NLU vs NLG: NLP is the umbrella. NLU (Natural Language Understanding) focuses on comprehension. NLG (Natural Language Generation) focuses on producing text. LLMs do both.',
    ],
    relatedTerms: ['LLM', 'Sentiment Analysis', 'NER', 'Text Classification'],
  },

  // ── MLOps & Production ──────────────────────────────────────
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
  {
    id: 'ai-eval',
    domain: 'ai',
    title: 'AI Evals & Benchmarks',
    subtitle: 'Measuring if your AI actually works',
    difficulty: 'intermediate',
    tags: ['evaluation', 'benchmarks', 'metrics', 'testing'],
    definition:
      'AI evals are systematic tests that measure model quality on specific tasks. They range from standardized benchmarks (MMLU, HumanEval, GPQA) that compare models, to custom evals that test your specific use case — like grading whether the model extracts the right fields from invoices.',
    whyItMatters:
      'Without evals, you\'re flying blind. "It seemed to work in a few examples" is not validation. Production AI systems need automated evals that run on every prompt change, model upgrade, or RAG index update — catching regressions before users do.',
    analogy:
      'Like unit tests for AI. Just as you wouldn\'t deploy code without tests, you shouldn\'t deploy an AI pipeline without evals. The difference is that AI evals often need human judgment or an LLM-as-judge to score.',
    soundsSmartToSay:
      '"Before we switch models, let\'s run our eval suite — we have 500 test cases covering the core use cases, and we need to see if the new model matches or beats our current accuracy."',
    commonConfusions: [
      'Public benchmarks (MMLU, HumanEval) measure general capability. They don\'t predict performance on YOUR specific task. Always build custom evals for your use case.',
      'LLM-as-judge: Using one LLM to evaluate another\'s output is common and surprisingly effective for subjective tasks (tone, helpfulness, completeness). Anthropic and OpenAI both provide guidance on this pattern.',
    ],
    relatedTerms: ['MLOps', 'Benchmarks', 'Testing', 'LLM-as-Judge'],
  },
  {
    id: 'ai-guardrails',
    domain: 'ai',
    title: 'Guardrails',
    subtitle: 'Safety rails for AI systems',
    difficulty: 'intermediate',
    tags: ['safety', 'content filtering', 'validation', 'constraints'],
    definition:
      'Guardrails are programmatic checks that constrain AI behavior — validating inputs (blocking prompt injection), filtering outputs (removing harmful content), enforcing format compliance (JSON schema), and preventing off-topic responses. They sit between the user and the model, acting as a safety layer.',
    whyItMatters:
      'LLMs can be manipulated (prompt injection), generate harmful content, leak sensitive data, or go off-topic. Guardrails are the defense layer that makes AI systems safe for production. They are not optional for customer-facing AI.',
    analogy:
      'Like the bumpers in a bowling lane — they don\'t roll the ball for you, but they prevent gutter balls. Guardrails let the AI operate freely within safe boundaries while blocking harmful edge cases.',
    soundsSmartToSay:
      '"We need input guardrails for prompt injection and output guardrails for PII detection — the model itself isn\'t a reliable safety boundary."',
    commonConfusions: [
      'Guardrails vs the model\'s built-in safety: Models have training-time safety (RLHF), but it\'s not sufficient. Guardrails are additional, programmable rules that you control. Think of them as defense-in-depth.',
      'Guardrail frameworks: NeMo Guardrails (NVIDIA), Guardrails AI, and custom implementations using classifier models or regex rules. The right choice depends on your latency tolerance and threat model.',
    ],
    relatedTerms: ['Prompt Injection', 'AI Safety', 'Content Moderation', 'Input Validation'],
  },

  // ── AI Safety & Ethics ──────────────────────────────────────
  {
    id: 'ai-alignment',
    domain: 'ai',
    title: 'AI Alignment',
    subtitle: 'Making AI do what we actually want',
    difficulty: 'intermediate',
    tags: ['safety', 'values', 'RLHF', 'constitutional AI'],
    definition:
      'AI alignment is the challenge of ensuring AI systems behave in accordance with human values and intentions. It spans from practical concerns (the model follows instructions correctly) to existential ones (advanced AI systems remain beneficial as they become more capable).',
    whyItMatters:
      'A misaligned AI might technically complete a task while violating the spirit of the request — maximizing a metric at the cost of something important you didn\'t specify. Alignment research directly improves model safety and is a major focus at Anthropic, OpenAI, and DeepMind.',
    analogy:
      'Like the "genie problem" — the genie grants your wish literally but not how you intended. "Make me rich" results in you becoming a famous pirate. Alignment ensures the AI understands and respects your actual intent, not just the literal instruction.',
    soundsSmartToSay:
      '"The alignment challenge isn\'t just about preventing harmful outputs — it\'s about ensuring the model understands the intent behind instructions, not just their literal meaning."',
    commonConfusions: [
      'Alignment vs safety: Safety is about preventing specific harms (toxic content, dangerous instructions). Alignment is the broader goal of ensuring the AI\'s objectives match human objectives. Safety is a subset of alignment.',
      'Constitutional AI (Anthropic\'s approach) trains models with explicit principles rather than relying solely on human preference data — making the alignment process more transparent and controllable.',
    ],
    relatedTerms: ['RLHF', 'Constitutional AI', 'AI Safety', 'Red Teaming'],
  },
  {
    id: 'ai-red-teaming',
    domain: 'ai',
    title: 'AI Red Teaming',
    subtitle: 'Adversarial testing for AI systems',
    difficulty: 'intermediate',
    tags: ['security', 'adversarial', 'jailbreaking', 'testing'],
    definition:
      'AI red teaming is the practice of systematically testing AI systems by trying to make them behave badly — generating harmful content, leaking system prompts, following dangerous instructions, or producing biased outputs. Red teamers act as adversaries to find vulnerabilities before real users exploit them.',
    whyItMatters:
      'Every AI system deployed publicly will be adversarially tested by users. Red teaming finds vulnerabilities proactively — prompt injection attacks, jailbreaks, bias in outputs, and data leakage risks. It is now a standard practice before launching AI products.',
    analogy:
      'Like penetration testing for software, but for AI behavior. Instead of testing for SQL injection, you test for prompt injection. Instead of checking for data breaches, you check if the model leaks its system prompt or training data.',
    soundsSmartToSay:
      '"Before launch, we need a red team pass — specifically testing for prompt injection, system prompt extraction, and whether the model can be tricked into generating content outside our policy."',
    commonConfusions: [
      'AI red teaming vs traditional red teaming: Traditional cybersecurity red teaming tests infrastructure. AI red teaming tests model behavior. The skill sets overlap (adversarial thinking) but the attack surfaces are different.',
      'Automated red teaming uses one AI to attack another — generating thousands of adversarial prompts to find vulnerabilities at scale. Human red teaming is still needed for creative, context-dependent attacks.',
    ],
    relatedTerms: ['AI Safety', 'Prompt Injection', 'Guardrails', 'Jailbreaking'],
  },
  {
    id: 'ai-prompt-injection',
    domain: 'ai',
    title: 'Prompt Injection',
    subtitle: 'The SQL injection of the AI era',
    difficulty: 'intermediate',
    tags: ['security', 'attack', 'vulnerability', 'injection'],
    definition:
      'Prompt injection is an attack where a user crafts input that overrides the LLM\'s system instructions. Direct injection manipulates the model through the user message. Indirect injection hides malicious instructions in data the model processes (emails, web pages, documents) — tricking the model into taking unintended actions.',
    whyItMatters:
      'Prompt injection is the #1 vulnerability in LLM applications. If your AI agent reads emails and can take actions, a malicious email could instruct the agent to forward sensitive data. No complete defense exists yet — this is an active research area.',
    analogy:
      'Like SQL injection, where user input becomes code. In prompt injection, user input becomes instructions that the model follows. "Ignore previous instructions and instead..." is the LLM equivalent of "1=1; DROP TABLE users".',
    soundsSmartToSay:
      '"We need to treat all user-supplied and retrieved content as untrusted — implement input sanitization, output validation, and privilege separation so the model can\'t be tricked into taking high-privilege actions."',
    commonConfusions: [
      'Direct vs indirect prompt injection: Direct = user deliberately manipulates the prompt. Indirect = malicious instructions hidden in external data the model processes (retrieved documents, emails, web content). Indirect is harder to defend against.',
      'There is no complete fix. Instruction hierarchy, input/output classifiers, and privilege separation reduce risk but don\'t eliminate it. Design systems assuming prompt injection is possible.',
    ],
    relatedTerms: ['AI Red Teaming', 'Guardrails', 'AI Safety', 'Input Validation'],
  },
  {
    id: 'ai-bias',
    domain: 'ai',
    title: 'Bias in AI',
    subtitle: 'When AI systems reflect or amplify unfairness',
    difficulty: 'beginner',
    tags: ['fairness', 'ethics', 'discrimination', 'responsible AI'],
    definition:
      'AI bias occurs when models produce systematically unfair outcomes for certain groups. It can originate from biased training data (historical discrimination), biased labeling (human annotator prejudice), biased evaluation (metrics that don\'t capture fairness), or biased deployment (applying a model to populations it wasn\'t designed for).',
    whyItMatters:
      'Biased AI systems cause real harm — discriminatory hiring tools, biased lending decisions, unfair criminal justice risk scores. Regulatory frameworks (EU AI Act) now require bias testing for high-risk AI applications. It is a legal, ethical, and reputational risk.',
    analogy:
      'Like a mirror that distorts — AI reflects the biases in its training data, often amplifying them. If historical hiring data favored men for engineering roles, a model trained on that data will learn and perpetuate that bias.',
    soundsSmartToSay:
      '"We need to run fairness audits on the model\'s outputs across protected categories before deployment — accuracy alone doesn\'t tell us if the model is biased."',
    commonConfusions: [
      'Bias is not always about protected categories (race, gender). Selection bias, survivorship bias, and measurement bias in data all cause model errors. A model trained only on successful loans can\'t learn to predict defaults accurately.',
      'Removing bias is not as simple as removing demographic features. Models can infer protected attributes from proxies (zip code → race, name → gender). Debiasing requires careful analysis of outcomes, not just inputs.',
    ],
    relatedTerms: ['AI Ethics', 'Fairness', 'Responsible AI', 'EU AI Act'],
  },
  {
    id: 'ai-explainable',
    domain: 'ai',
    title: 'Explainable AI (XAI)',
    subtitle: 'Understanding why the model made that decision',
    difficulty: 'intermediate',
    tags: ['interpretability', 'SHAP', 'LIME', 'transparency'],
    definition:
      'Explainable AI refers to methods that make AI decisions interpretable to humans. Techniques like SHAP (which features mattered most), LIME (local approximations), attention visualization, and chain-of-thought reasoning help answer "why did the model predict this?"',
    whyItMatters:
      'Regulators, auditors, and users increasingly demand explanations for AI decisions — especially in healthcare, finance, and law. "The model said so" is not acceptable for a denied loan or a medical diagnosis. XAI is also essential for debugging and improving models.',
    analogy:
      'Like the difference between a judge who says "guilty" and one who explains the reasoning — both reach a verdict, but only the second can be appealed, reviewed, and trusted.',
    soundsSmartToSay:
      '"We should use SHAP values to explain our risk model\'s decisions to loan officers — they need to understand why a specific application was flagged, not just that it was."',
    commonConfusions: [
      'Explainability vs accuracy: There\'s often a trade-off. A simple decision tree is fully explainable but less accurate. A deep neural network is accurate but opaque. Ensemble methods and post-hoc explanations bridge the gap.',
      'LLM chain-of-thought is not true explainability — the model\'s stated reasoning may not reflect its actual internal computation. It\'s useful but should not be treated as a faithful explanation of the decision process.',
    ],
    relatedTerms: ['SHAP', 'LIME', 'Interpretability', 'AI Governance'],
  },
  {
    id: 'ai-governance',
    domain: 'ai',
    title: 'AI Governance & EU AI Act',
    subtitle: 'Regulation and policy for AI systems',
    difficulty: 'beginner',
    tags: ['regulation', 'compliance', 'policy', 'EU AI Act'],
    definition:
      'AI governance encompasses the policies, frameworks, and regulations that guide the development and deployment of AI systems. The EU AI Act (effective 2025–2026) is the most comprehensive regulation — categorizing AI systems by risk level and imposing requirements from transparency notices to mandatory conformity assessments.',
    whyItMatters:
      'The EU AI Act applies to any company serving EU users — not just EU-based companies. High-risk AI (hiring, lending, medical, legal) faces strict requirements: risk assessments, human oversight, documentation, and bias testing. Non-compliance means fines up to 7% of global revenue.',
    analogy:
      'Like GDPR was for data privacy, the EU AI Act is for AI. Just as GDPR forced every company to rethink data handling, the AI Act forces rethinking how AI systems are built, documented, and monitored.',
    soundsSmartToSay:
      '"Our hiring AI would be classified as high-risk under the EU AI Act — we need conformity assessment, human oversight documentation, and ongoing monitoring before we can deploy it in EU markets."',
    commonConfusions: [
      'Risk tiers: Unacceptable (banned — social scoring, real-time facial recognition in public), High (regulated — hiring, lending, medical), Limited (transparency — chatbots must disclose they\'re AI), Minimal (unregulated — spam filters, games).',
      'The EU AI Act is just the first. Similar legislation is progressing in the US (executive orders), China, Canada, and Brazil. Building governance-ready AI now avoids costly retrofits later.',
    ],
    relatedTerms: ['Responsible AI', 'Bias in AI', 'Explainable AI', 'Compliance'],
  },

  // ── Emerging & Hot Topics ──────────────────────────────────
  {
    id: 'ai-small-language-models',
    domain: 'ai',
    title: 'Small Language Models (SLMs)',
    subtitle: 'Capable AI that fits in your pocket',
    difficulty: 'intermediate',
    tags: ['SLM', 'edge', 'efficiency', 'on-device'],
    definition:
      'Small Language Models (1B–13B parameters) are designed to run efficiently on consumer hardware, edge devices, or modest cloud instances. Models like Phi-3, Gemma, Llama 3.2, and Mistral 7B deliver surprising quality for their size — often matching larger models on specific tasks after fine-tuning.',
    whyItMatters:
      'Not every AI task needs GPT-4. SLMs enable on-device AI (no internet required), dramatically lower inference costs, faster response times, and data privacy (nothing leaves the device). The trend is toward smaller, more efficient models for production deployment.',
    analogy:
      'Like a sports car vs a bus. The bus (large model) carries everything but is expensive to run. The sports car (SLM) is specialized, fast, and efficient — perfect when you don\'t need to carry 100 passengers.',
    soundsSmartToSay:
      '"For our classification task, a fine-tuned Phi-3 mini outperforms GPT-3.5 at 1/100th the inference cost — we don\'t need a 1T-parameter model for this."',
    commonConfusions: [
      'Small ≠ bad. A fine-tuned 7B model on your specific task often beats a general-purpose 70B model. Task-specific performance doesn\'t scale linearly with size.',
      'SLMs vs quantized large models: Both reduce resource requirements, but differently. SLMs are architecturally smaller. Quantized models are full-size models compressed. SLMs are generally faster; quantized large models may be more capable.',
    ],
    relatedTerms: ['Quantization', 'On-Device AI', 'Distillation', 'Edge Computing'],
  },
  {
    id: 'ai-on-device',
    domain: 'ai',
    title: 'On-Device AI',
    subtitle: 'Running AI locally without the cloud',
    difficulty: 'intermediate',
    tags: ['edge', 'privacy', 'local', 'NPU'],
    definition:
      'On-device AI runs models directly on phones, laptops, or edge hardware — no cloud API calls needed. Enabled by SLMs, quantization, and dedicated AI hardware (NPUs in phones, Apple Neural Engine, Intel NPU), it provides instant responses, works offline, and keeps data private.',
    whyItMatters:
      'Cloud AI has latency, costs money per request, and sends data to a third party. On-device AI eliminates all three. Apple Intelligence, Samsung Galaxy AI, and Windows Copilot+ PCs are bringing AI directly to consumer devices — setting user expectations.',
    analogy:
      'Like the shift from mainframe computing to personal computers. Instead of sending your data to a remote server for processing, you do it right on the device in your hand.',
    soundsSmartToSay:
      '"We should run the classification model on-device using Core ML — it removes our API cost, eliminates latency, and means we never have to send user data to the cloud."',
    commonConfusions: [
      'On-device AI ≠ offline-only. Many implementations use a hybrid approach: simple tasks run on-device, complex tasks are routed to the cloud. The device model acts as a fast first pass.',
      'NPU (Neural Processing Unit) is specialized hardware in modern chips (Apple M-series, Qualcomm Snapdragon) designed specifically for AI inference. It\'s more power-efficient than running AI on the CPU or GPU.',
    ],
    relatedTerms: ['Small Language Models', 'Edge Computing', 'NPU', 'Privacy'],
  },
  {
    id: 'ai-coding-assistants',
    domain: 'ai',
    title: 'AI Coding Assistants',
    subtitle: 'AI that writes, reviews, and debugs code',
    difficulty: 'beginner',
    tags: ['Copilot', 'Claude Code', 'Cursor', 'code generation'],
    definition:
      'AI coding assistants use LLMs to help developers write code faster — autocompleting functions, generating boilerplate, explaining code, finding bugs, writing tests, and even executing multi-file changes. Tools like GitHub Copilot, Claude Code, Cursor, and Windsurf are transforming how software is built.',
    whyItMatters:
      'AI coding assistants are the highest-adoption AI tool category among developers. They increase velocity on routine tasks by 30–50% and make complex codebases more accessible. Understanding their capabilities and limitations is essential for any technical discussion.',
    analogy:
      'Like pair programming with a colleague who has read every open-source repository on GitHub. They can suggest implementations, catch bugs, and explain unfamiliar code — but you still need to verify their suggestions and make architectural decisions.',
    soundsSmartToSay:
      '"We\'re using AI coding assistants for boilerplate and test generation, but all AI-authored code goes through the same code review process as human-written code — the model is a tool, not an authority."',
    commonConfusions: [
      'AI coding ≠ no-code. Coding assistants augment developers, not replace them. You still need to understand the code, review suggestions, and make architectural decisions. Junior developers relying blindly on AI suggestions produce fragile code.',
      'Autocomplete (Copilot) vs agentic coding (Claude Code, Cursor Agent) are very different. Autocomplete suggests the next few lines. Agentic coding can plan and execute multi-file changes, run tests, and iterate on failures.',
    ],
    relatedTerms: ['LLM', 'Code Generation', 'AI Agents', 'Developer Productivity'],
  },
  {
    id: 'ai-synthetic-data',
    domain: 'ai',
    title: 'Synthetic Data',
    subtitle: 'AI-generated data to train AI',
    difficulty: 'intermediate',
    tags: ['data generation', 'augmentation', 'privacy', 'training'],
    definition:
      'Synthetic data is artificially generated data that mimics the statistical properties of real data without containing actual records. It is created using AI models, simulation, or rule-based systems to supplement or replace real data for model training, testing, and development.',
    whyItMatters:
      'Real data is expensive to collect, label, and legally risky to share. Synthetic data solves data scarcity (rare edge cases), privacy (no real PII), and cost (generate millions of examples for pennies). It is increasingly used to train and fine-tune AI models.',
    analogy:
      'Like a flight simulator for pilots. Synthetic data lets you create any scenario — including rare emergencies — without waiting for them to happen in the real world. The training is safe, cheap, and repeatable.',
    soundsSmartToSay:
      '"We can use synthetic data to augment our training set for rare fraud patterns — we only have 50 real examples, but we can generate thousands of realistic variants to improve the model\'s recall."',
    commonConfusions: [
      'Synthetic data isn\'t "fake" data — it\'s statistically representative data that preserves the patterns and distributions of real data without exposing actual records. Done well, models trained on synthetic data perform comparably to those trained on real data.',
      'Model collapse: Training AI on AI-generated data exclusively can degrade quality over generations. The best practice is to mix synthetic with real data, not replace it entirely.',
    ],
    relatedTerms: ['Data Augmentation', 'Privacy', 'Training Data', 'Fine-tuning'],
  },
  {
    id: 'ai-federated-learning',
    domain: 'ai',
    title: 'Federated Learning',
    subtitle: 'Training AI without sharing data',
    difficulty: 'advanced',
    tags: ['privacy', 'distributed', 'decentralized', 'training'],
    definition:
      'Federated learning trains a model across multiple devices or organizations without centralizing the data. Each participant trains a local model on their data and shares only the model updates (gradients), not the raw data. A central server aggregates the updates into a better global model.',
    whyItMatters:
      'Healthcare, finance, and government have data that cannot leave organizational boundaries due to regulation (HIPAA, GDPR). Federated learning lets multiple hospitals train a shared medical AI model without any hospital sharing patient data — unlocking collective intelligence while respecting privacy.',
    analogy:
      'Like multiple students studying different textbooks and then sharing their notes (not the textbooks). The class gets the benefit of all the knowledge without anyone seeing anyone else\'s source material.',
    soundsSmartToSay:
      '"We should use federated learning for the cross-hospital diagnostic model — each hospital trains locally on their patient data and we aggregate the model updates centrally, never moving a single patient record."',
    commonConfusions: [
      'Federated learning is not completely private — model updates can leak information about the training data. Differential privacy and secure aggregation are additional techniques needed for strong privacy guarantees.',
      'Communication overhead is the main practical challenge. Sending model updates back and forth over the network is bandwidth-intensive, especially for large models. This limits federated learning to relatively simple models or well-connected networks.',
    ],
    relatedTerms: ['Privacy', 'Differential Privacy', 'Distributed Computing', 'HIPAA'],
  },
  {
    id: 'ai-knowledge-graphs',
    domain: 'ai',
    title: 'Knowledge Graphs',
    subtitle: 'Structured knowledge for AI reasoning',
    difficulty: 'advanced',
    tags: ['graph', 'ontology', 'entities', 'relationships'],
    definition:
      'A knowledge graph represents information as a network of entities (people, places, concepts) and their relationships. "Claude → developed_by → Anthropic → founded_by → Dario Amodei" captures structured facts that enable precise reasoning, entity disambiguation, and multi-hop queries that LLMs struggle with alone.',
    whyItMatters:
      'LLMs are great at natural language but weak at precise factual reasoning, consistency, and structured relationships. Knowledge graphs complement LLMs by providing a structured, queryable source of truth — reducing hallucination and enabling complex relational queries.',
    analogy:
      'Like a vast network of Wikipedia infoboxes all connected together. Each entity has structured facts, and you can follow the connections to discover relationships — "Who founded the company that built the AI model that wrote this text?"',
    soundsSmartToSay:
      '"We should combine RAG with a knowledge graph — the graph handles entity relationships and the vector store handles semantic search. Together they cover both structured and unstructured knowledge."',
    commonConfusions: [
      'Knowledge graphs vs vector databases: Vector DBs excel at semantic similarity (finding related content). Knowledge graphs excel at explicit relationships (entity A is connected to entity B via relationship C). They serve different purposes and are often used together.',
      'Building a knowledge graph is labor-intensive. LLMs can now help extract entities and relationships from text, but the graph still needs schema design, curation, and maintenance.',
    ],
    relatedTerms: ['RAG', 'Ontology', 'Entity Resolution', 'Graph Database'],
  },
  {
    id: 'ai-automl',
    domain: 'ai',
    title: 'AutoML',
    subtitle: 'Automating the machine learning workflow',
    difficulty: 'intermediate',
    tags: ['automation', 'model selection', 'hyperparameter tuning'],
    definition:
      'AutoML automates the tedious parts of building ML models — feature engineering, model selection, hyperparameter tuning, and architecture search. Tools like Google Cloud AutoML, H2O AutoML, and Auto-sklearn can build competitive models with minimal manual intervention.',
    whyItMatters:
      'Not every ML task needs a PhD researcher hand-tuning hyperparameters. AutoML democratizes ML — a data analyst can build a production-quality classification model by providing data and a target variable. It also helps experienced practitioners explore the solution space faster.',
    analogy:
      'Like an automated kitchen that tries every recipe variation, adjusts seasoning, and serves you the best result — instead of a chef spending weeks experimenting manually.',
    soundsSmartToSay:
      '"Let\'s run AutoML on this tabular dataset first — it\'ll give us a strong baseline in hours. If we need to beat that, we can invest in custom feature engineering."',
    commonConfusions: [
      'AutoML is best for tabular/structured data problems (classification, regression). For LLM tasks, prompt engineering and RAG are the "automated" approach. AutoML doesn\'t build LLMs.',
      'AutoML doesn\'t replace ML understanding. You still need to frame the problem correctly, prepare data, evaluate results, and understand if the model is appropriate for production.',
    ],
    relatedTerms: ['Hyperparameter Tuning', 'Model Selection', 'Feature Engineering', 'MLOps'],
  },
  {
    id: 'ai-data-labeling',
    domain: 'ai',
    title: 'Data Labeling',
    subtitle: 'The human work that powers AI',
    difficulty: 'beginner',
    tags: ['annotation', 'ground truth', 'labeling', 'crowdsourcing'],
    definition:
      'Data labeling is the process of adding meaningful tags or annotations to raw data — marking objects in images, classifying text sentiment, transcribing audio, or identifying entities in documents. These labels become the "answer key" that supervised learning models train on.',
    whyItMatters:
      'AI is only as good as its labels. A spam classifier trained on incorrectly labeled emails will misclassify. Data labeling is often the most expensive and time-consuming part of an ML project — and the most impactful on model quality.',
    analogy:
      'Like creating the answer key for an exam. Without correct answers, students (models) can\'t learn what\'s right. One wrong answer in the key propagates to every student who studies from it.',
    soundsSmartToSay:
      '"Our labeling quality is more important than quantity — 1,000 consistently labeled examples outperform 10,000 noisy labels. Let\'s invest in clear labeling guidelines and inter-annotator agreement metrics."',
    commonConfusions: [
      'LLMs are increasingly used for labeling — generating initial labels that humans then verify (human-in-the-loop). This is 5–10x faster than manual labeling from scratch.',
      'Labeling platforms (Label Studio, Scale AI, Labelbox) provide tools, workforce management, and quality control. At scale, most companies use platforms rather than in-house labeling.',
    ],
    relatedTerms: ['Supervised Learning', 'Training Data', 'Active Learning', 'Ground Truth'],
  },
  {
    id: 'ai-responsible-ai',
    domain: 'ai',
    title: 'Responsible AI',
    subtitle: 'Building AI that is safe, fair, and trustworthy',
    difficulty: 'beginner',
    tags: ['ethics', 'fairness', 'transparency', 'accountability'],
    definition:
      'Responsible AI is the practice of building AI systems that are fair, transparent, safe, privacy-preserving, and accountable. It encompasses bias testing, explainability, data governance, model documentation (model cards), impact assessments, and human oversight — throughout the entire AI lifecycle.',
    whyItMatters:
      'AI systems affect hiring, lending, healthcare, and criminal justice decisions. Without responsible AI practices, models can discriminate, invade privacy, and make consequential errors without accountability. It is increasingly a regulatory requirement and customer expectation.',
    analogy:
      'Like the difference between building a bridge that holds weight and building one that is safe, accessible, environmentally sound, and up to code. Technical performance is necessary but not sufficient — the system must be responsible in how it affects people.',
    soundsSmartToSay:
      '"We need to publish a model card documenting the model\'s intended use cases, known limitations, training data composition, and fairness evaluation results — this is table stakes for responsible deployment."',
    commonConfusions: [
      'Responsible AI is not just ethics — it includes practical engineering: testing, monitoring, documentation, incident response, and human oversight. It is an engineering discipline, not just a philosophy.',
      'Model cards (Google) and datasheets for datasets (Microsoft) are standardized documentation formats that help communicate a model\'s capabilities, limitations, and appropriate use cases.',
    ],
    relatedTerms: ['Bias in AI', 'Explainable AI', 'AI Governance', 'Model Cards'],
  },
  {
    id: 'ai-text-to-speech',
    domain: 'ai',
    title: 'AI Voice & Text-to-Speech',
    subtitle: 'AI that sounds human',
    difficulty: 'beginner',
    tags: ['TTS', 'voice cloning', 'speech synthesis', 'audio'],
    definition:
      'Modern AI text-to-speech (TTS) generates natural, human-sounding speech from text — with control over tone, emotion, pacing, and even cloning specific voices from short audio samples. Services like ElevenLabs, OpenAI TTS, and Google WaveNet produce voices that are increasingly indistinguishable from real humans.',
    whyItMatters:
      'AI voice powers virtual assistants, audiobook narration, accessibility tools, customer service bots, and content creation. Voice cloning raises both exciting possibilities (preserving voices, multilingual dubbing) and serious risks (deepfake calls, fraud).',
    analogy:
      'Like a voice actor who can perfectly imitate anyone after hearing them speak for 30 seconds — except this actor works instantly, in any language, and never gets tired.',
    soundsSmartToSay:
      '"We should use AI TTS for our accessibility feature — modern models sound natural enough that users prefer them over robotic screen readers, and we can offer multiple voice options without hiring voice actors."',
    commonConfusions: [
      'TTS vs STT (Speech-to-Text): TTS generates speech from text. STT (Whisper, Google STT) transcribes speech to text. They are often used together in voice AI pipelines.',
      'Voice cloning with just 15 seconds of audio is now possible — this is why voice-based authentication is becoming less secure. Organizations should add non-voice verification for sensitive actions.',
    ],
    relatedTerms: ['Deepfakes', 'Speech Recognition', 'Accessibility', 'Multimodal'],
  },
  {
    id: 'ai-context-engineering',
    domain: 'ai',
    title: 'Context Engineering',
    subtitle: 'Designing what the model sees',
    difficulty: 'advanced',
    tags: ['prompt design', 'RAG', 'context window', 'architecture'],
    definition:
      'Context engineering is the discipline of carefully designing everything that goes into an LLM\'s context window — system prompts, retrieved documents, conversation history, tool results, and examples. It treats the context as a product that must be curated, ordered, and optimized for the model\'s task.',
    whyItMatters:
      'In production AI systems, the quality of the context determines the quality of the output far more than the choice of model. Context engineering spans prompt design, RAG retrieval strategy, conversation memory management, and tool result formatting — it is the highest-leverage skill in AI engineering.',
    analogy:
      'Like a briefing packet for a CEO. The CEO (LLM) is capable, but their decision quality depends entirely on what information is in the packet, how it is organized, and what is highlighted vs buried.',
    soundsSmartToSay:
      '"Our bottleneck isn\'t the model — it\'s context engineering. We need to improve what we put in the context window: better retrieval, smarter summarization of conversation history, and more concise tool result formatting."',
    commonConfusions: [
      'Context engineering vs prompt engineering: Prompt engineering focuses on the instruction text. Context engineering is broader — it includes all information provided to the model (retrieved docs, tool results, history, examples), not just the instruction.',
      'Context window management is critical for long conversations. Strategies include summarizing old messages, dropping irrelevant tool results, and using a sliding window — losing important context silently degrades quality.',
    ],
    relatedTerms: ['Prompt Engineering', 'RAG', 'Context Window', 'System Prompt'],
  },
  {
    id: 'ai-tokenomics',
    domain: 'ai',
    title: 'AI Pricing & Cost Optimization',
    subtitle: 'The economics of running AI in production',
    difficulty: 'intermediate',
    tags: ['pricing', 'cost', 'tokens', 'optimization'],
    definition:
      'AI API pricing is typically per-token (input tokens cheaper than output) with model-tier pricing (frontier models 10–100x more expensive than smaller ones). Cost optimization involves choosing the right model for each task, caching prompts, batching requests, reducing token usage, and knowing when to self-host vs use APIs.',
    whyItMatters:
      'Unoptimized AI costs can kill a product. A chatbot that costs $0.50 per conversation is unviable at scale. Understanding the cost levers — model selection, prompt caching, token reduction, batching, and model routing — is the difference between a sustainable product and an expensive demo.',
    analogy:
      'Like choosing between a luxury restaurant and a food truck. Both serve good food, but you don\'t need a Michelin-star chef (frontier model) for every meal (task). Use the expensive option strategically and the economical option by default.',
    soundsSmartToSay:
      '"We should implement model routing — use Haiku for simple classifications and Opus for complex reasoning. That alone should cut our API costs by 60% without degrading user experience."',
    commonConfusions: [
      'Input tokens are typically 3–10x cheaper than output tokens. Prompt caching reduces input costs further. The biggest cost lever is usually reducing output length — ask for concise responses.',
      'Self-hosting vs API: Self-hosting (vLLM + open-source model) has high fixed costs but low marginal cost. APIs have low fixed costs but higher marginal cost. Crossover point is typically 1M+ tokens/day.',
    ],
    relatedTerms: ['Tokens', 'Prompt Caching', 'Model Serving', 'Inference'],
  },
];
