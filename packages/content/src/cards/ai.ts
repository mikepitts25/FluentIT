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
  {
    id: 'ai-fine-tuning',
    domain: 'ai',
    title: 'Fine-Tuning',
    subtitle: 'Teaching a foundation model new tricks',
    difficulty: 'intermediate',
    tags: ['training', 'customization', 'LoRA'],
    definition:
      'Fine-tuning is the process of taking a pre-trained foundation model and continuing its training on a smaller, task-specific dataset to specialize its behavior. Unlike training from scratch (which costs millions), fine-tuning adjusts existing model weights with far less data and compute — often thousands of examples rather than trillions of tokens.',
    whyItMatters:
      'When prompt engineering hits its limits — inconsistent tone, poor performance on domain-specific tasks, or inability to follow a complex output format — fine-tuning lets you bake desired behavior directly into the model weights. This reduces token usage (no lengthy system prompts), improves latency, and can dramatically boost accuracy on narrow tasks like classification or entity extraction.',
    analogy:
      'Like an experienced sysadmin cross-training into cloud engineering. They don\'t start from zero — they already understand networking, Linux, and scripting. Fine-tuning adds cloud-specific knowledge on top of that strong foundation, much faster than training a junior from scratch.',
    soundsSmartToSay:
      '"We should fine-tune on our labeled support tickets rather than stuffing examples into the prompt — we\'ll get better classification accuracy and lower per-request cost since we won\'t need a massive few-shot prompt."',
    commonConfusions: [
      'Fine-tuning vs RAG: Fine-tuning changes how the model behaves and reasons. RAG gives the model access to external data at query time. Fine-tuning is for style and task performance; RAG is for factual grounding against a knowledge base.',
      'Fine-tuning vs training from scratch: Fine-tuning starts from a pre-trained model and is relatively cheap ($10–$1000s). Training from scratch builds a model from random weights and costs millions of dollars.',
      'LoRA (Low-Rank Adaptation) is a parameter-efficient fine-tuning method that trains a small set of adapter weights rather than modifying the full model — drastically reducing compute and memory requirements.',
    ],
    relatedTerms: ['LoRA', 'Transfer Learning', 'Foundation Model', 'RAG'],
  },
  {
    id: 'ai-transformers',
    domain: 'ai',
    title: 'Transformers',
    subtitle: 'The architecture behind modern AI',
    difficulty: 'advanced',
    tags: ['architecture', 'attention', 'neural network'],
    definition:
      'The Transformer is the neural network architecture introduced in 2017 ("Attention Is All You Need") that underpins virtually every modern LLM, image generator, and speech model. Its core innovation is the self-attention mechanism, which lets the model weigh the importance of every token relative to every other token in the input — capturing long-range dependencies that previous architectures (RNNs, LSTMs) struggled with.',
    whyItMatters:
      'Understanding Transformers helps you reason about model capabilities and constraints. Context window limits, quadratic scaling costs, and why longer inputs are more expensive all stem from the attention mechanism. When vendors quote context lengths or price per token, those numbers trace back to Transformer architecture decisions.',
    analogy:
      'Like a load balancer that can route any request to any server with full awareness of all other active connections. Previous architectures (RNNs) were like a single-threaded queue — they processed tokens one at a time and struggled to remember what happened thousands of steps ago. The Transformer sees everything at once, in parallel.',
    soundsSmartToSay:
      '"The quadratic cost of self-attention is why context window pricing scales the way it does — architectures like sliding window attention and sparse attention are trying to bring that closer to linear."',
    commonConfusions: [
      'Transformer vs LLM: A Transformer is an architecture (the blueprint). An LLM is a specific model built on that architecture and trained on data. All major LLMs use Transformers, but Transformers are also used for image generation (Vision Transformers), speech, and protein folding.',
      'Attention vs parameters: The attention mechanism is how the model dynamically focuses on relevant parts of the input. Parameters (weights) are the learned values stored in the model. A 70B-parameter model has 70 billion learned weights.',
      'Encoder vs decoder Transformers: Encoder models (BERT) are good at understanding and classification. Decoder models (GPT, Claude) are good at generation. Encoder-decoder models (T5) do both.',
    ],
    relatedTerms: ['Self-Attention', 'Context Window', 'BERT', 'GPT'],
  },
  {
    id: 'ai-computer-vision',
    domain: 'ai',
    title: 'Computer Vision',
    subtitle: 'Teaching machines to see and interpret images',
    difficulty: 'beginner',
    tags: ['image recognition', 'object detection', 'CNN'],
    definition:
      'Computer Vision (CV) is the field of AI focused on enabling machines to interpret visual information — images, video, and 3D data. Modern CV models can classify objects, detect and localize items within images, segment pixel-level boundaries, read text (OCR), and generate images from text descriptions.',
    whyItMatters:
      'CV drives real business value across industries: automated quality inspection on manufacturing lines, medical imaging diagnostics, document processing and OCR, security camera analytics, and autonomous vehicles. For IT teams, CV increasingly shows up in internal tools — automated screenshot-based testing, infrastructure monitoring dashboards that detect anomalies visually, and document digitization pipelines.',
    analogy:
      'Like the difference between a network monitoring tool that only reads SNMP data (text-based AI) versus one that can also look at your Grafana dashboards and spot visual anomalies in the graphs (computer vision). CV gives AI the ability to process the same visual information humans rely on.',
    soundsSmartToSay:
      '"We can use an off-the-shelf object detection model for the invoice processing pipeline — we don\'t need to train from scratch when pre-trained models like YOLO handle document layout analysis well."',
    commonConfusions: [
      'Computer Vision vs image generation: CV is about understanding images (what is in this photo?). Image generation (DALL-E, Stable Diffusion, Midjourney) is about creating new images. They use different model architectures and serve different purposes.',
      'CNNs vs Vision Transformers: Convolutional Neural Networks (CNNs) were the dominant CV architecture for years. Vision Transformers (ViTs) have overtaken them on many benchmarks by applying the same attention mechanism used in LLMs to image patches.',
    ],
    relatedTerms: ['CNN', 'Object Detection', 'OCR', 'Vision Transformer'],
  },
  {
    id: 'ai-model-quantization',
    domain: 'ai',
    title: 'Model Quantization',
    subtitle: 'Shrinking models to run on less hardware',
    difficulty: 'advanced',
    tags: ['optimization', 'inference', 'compression'],
    definition:
      'Quantization reduces the numerical precision of a model\'s weights — for example, converting from 16-bit floating point (FP16) to 8-bit integers (INT8) or even 4-bit (INT4). This shrinks the model\'s memory footprint by 2–4x and speeds up inference, often with surprisingly small accuracy losses. Techniques like GPTQ, AWQ, and GGUF have made quantized open-source models practical for production use.',
    whyItMatters:
      'GPU memory is the primary bottleneck for self-hosting AI models. A 70B-parameter model at FP16 requires ~140GB of VRAM (multiple expensive GPUs). Quantized to 4-bit, it fits in ~35GB (a single high-end GPU). Quantization is what makes it feasible to run powerful open-source models on reasonable hardware — turning a $50K infrastructure requirement into a $5K one.',
    analogy:
      'Like image compression (JPEG vs RAW). A RAW photo is perfectly precise but huge. JPEG discards precision the human eye won\'t notice, giving you a 10x smaller file that looks nearly identical. Quantization does the same for model weights — trading precision humans won\'t notice for dramatically lower resource requirements.',
    soundsSmartToSay:
      '"We should benchmark the AWQ 4-bit quantized version against the full FP16 model on our eval suite — if accuracy holds within 2%, we can serve the model on a single A100 instead of four."',
    commonConfusions: [
      'Quantization vs pruning vs distillation: Quantization reduces numerical precision. Pruning removes unnecessary weights entirely. Distillation trains a smaller model to mimic a larger one. All three reduce model size but through different mechanisms.',
      'Not all quantization is equal: Post-training quantization (PTQ) is applied after training and is fast but can lose accuracy. Quantization-aware training (QAT) incorporates quantization during training and preserves more accuracy but requires retraining.',
      'GGUF, GPTQ, AWQ are quantization formats, not quality levels. They use different algorithms and are optimized for different runtimes (llama.cpp, vLLM, TensorRT-LLM). The format matters for compatibility with your serving infrastructure.',
    ],
    relatedTerms: ['VRAM', 'INT8', 'GGUF', 'Model Compression'],
  },
  {
    id: 'ai-hallucinations',
    domain: 'ai',
    title: 'Hallucinations',
    subtitle: 'When AI confidently makes things up',
    difficulty: 'beginner',
    tags: ['reliability', 'accuracy', 'grounding'],
    definition:
      'Hallucinations occur when an AI model generates information that sounds plausible and confident but is factually incorrect, fabricated, or unsupported by its training data. This includes inventing fake citations, generating non-existent API endpoints, producing incorrect code that looks correct, or confidently stating false facts. Hallucination is an inherent property of how language models work — they predict probable next tokens, not verified truths.',
    whyItMatters:
      'Hallucinations are the single biggest risk in deploying AI for business use. A model that confidently generates a wrong answer is more dangerous than one that says "I don\'t know." Understanding hallucination risk is critical for deciding where AI can be trusted autonomously versus where human review is required — and for choosing mitigation strategies like RAG, grounding, and structured outputs.',
    analogy:
      'Like autocomplete on steroids. Your phone\'s autocomplete predicts the next likely word without understanding truth — it just knows what words usually follow other words. LLMs do the same thing at a massive scale. When the "most likely next token" happens to be wrong, you get a hallucination — delivered with the same confidence as a correct answer.',
    soundsSmartToSay:
      '"We need to implement grounding and citation verification for this workflow — the model will hallucinate in edge cases, and we can\'t ship fabricated data to customers without a verification layer."',
    commonConfusions: [
      'Hallucinations are not bugs that will be fully fixed — they are a structural consequence of probabilistic text generation. Models can be made to hallucinate less, but the risk never drops to zero.',
      'Confidence does not equal accuracy: A hallucinating model does not signal uncertainty. It states fabricated information with the same fluency and confidence as correct information, making hallucinations hard to detect without external verification.',
      'Mitigation strategies: RAG (ground answers in retrieved documents), structured outputs (constrain the response format), temperature reduction (less creative sampling), and human-in-the-loop review all reduce hallucination risk but none eliminate it.',
    ],
    relatedTerms: ['Grounding', 'RAG', 'Guardrails', 'Temperature'],
  },
  {
    id: 'ai-guardrails',
    domain: 'ai',
    title: 'Guardrails',
    subtitle: 'Safety boundaries for AI systems',
    difficulty: 'intermediate',
    tags: ['safety', 'content filtering', 'validation'],
    definition:
      'Guardrails are programmatic checks applied to AI model inputs and outputs to enforce safety, compliance, and quality constraints. Input guardrails validate and sanitize user prompts (blocking prompt injection, PII, or off-topic requests). Output guardrails validate model responses (checking for harmful content, hallucinated facts, format compliance, or policy violations) before they reach the end user.',
    whyItMatters:
      'Deploying an LLM without guardrails is like deploying a web application without input validation — it will eventually produce harmful, embarrassing, or legally risky outputs. Guardrails are the difference between a demo and a production system. Regulated industries (healthcare, finance, legal) often cannot deploy AI without demonstrable safety controls.',
    analogy:
      'Like a web application firewall (WAF) and output encoding combined. A WAF blocks malicious inputs before they reach your server; output encoding sanitizes responses before they reach the client. Guardrails do the same thing for AI — filtering dangerous inputs (prompt injection) and sanitizing outputs (harmful content, PII leakage) before they reach the user.',
    soundsSmartToSay:
      '"We should implement both input and output guardrails — input-side to catch prompt injection and PII, output-side to validate that responses stay within our approved topic boundaries and don\'t leak sensitive training data."',
    commonConfusions: [
      'Guardrails vs alignment: Alignment is about training the model to be helpful and harmless. Guardrails are external runtime checks applied around the model. A well-aligned model still needs guardrails because alignment is not perfect and adversarial users will probe for weaknesses.',
      'Guardrails are not just content moderation — they include structural validation (did the model return valid JSON?), factual verification (are cited sources real?), PII detection, topic restriction, and rate limiting.',
      'Prompt injection is the AI equivalent of SQL injection — adversarial input designed to override the model\'s instructions. Input guardrails are the first line of defense against this attack vector.',
    ],
    relatedTerms: ['Prompt Injection', 'Content Moderation', 'RLHF', 'Red Teaming'],
  },
  {
    id: 'ai-multimodal',
    domain: 'ai',
    title: 'Multimodal AI',
    subtitle: 'Models that understand text, images, audio, and more',
    difficulty: 'intermediate',
    tags: ['vision', 'audio', 'cross-modal'],
    definition:
      'Multimodal AI refers to models that can process and reason across multiple types of input — text, images, audio, video, and code — within a single model. Rather than using separate specialized models for each modality, multimodal models like GPT-4o, Claude, and Gemini can accept an image and a text question together and reason about them jointly.',
    whyItMatters:
      'Real-world business problems rarely involve just text. Support tickets include screenshots, documentation includes diagrams, meetings produce audio recordings, and reports contain charts. Multimodal AI lets you build workflows that process information the way humans do — across formats — without stitching together separate models for each data type.',
    analogy:
      'Like the difference between a monitoring system that can only read log files versus one that can also analyze metrics dashboards, listen to alert audio, and read runbook diagrams. A text-only model is like an engineer who can only read emails; a multimodal model is one who can also look at screenshots, listen to recordings, and read whiteboard photos.',
    soundsSmartToSay:
      '"Instead of building an OCR pipeline to extract text from these documents and then feeding that to the LLM, we should send the images directly to a multimodal model — it can reason about layout, tables, and visual context that OCR pipelines lose."',
    commonConfusions: [
      'Multimodal input vs output: Most current multimodal models accept multiple modalities as input but primarily output text. True multimodal output (generating images, audio, and text from one model) is newer and less mature.',
      'Multimodal vs multi-model: A multimodal system uses one model that natively understands multiple formats. A multi-model pipeline chains separate specialized models (OCR → text → LLM). The multimodal approach is simpler and preserves cross-modal context.',
      'Vision capabilities vary: some models can read charts and diagrams accurately, while others struggle. Always evaluate multimodal models on your specific visual content types before committing to a pipeline.',
    ],
    relatedTerms: ['Vision Transformer', 'OCR', 'Computer Vision', 'Speech-to-Text'],
  },
  {
    id: 'ai-transfer-learning',
    domain: 'ai',
    title: 'Transfer Learning',
    subtitle: 'Reusing what a model already knows',
    difficulty: 'intermediate',
    tags: ['pre-training', 'adaptation', 'foundation model'],
    definition:
      'Transfer learning is the technique of taking a model trained on a large general-purpose dataset and adapting it to a new, often more specific task. Rather than training from scratch, you leverage the representations and knowledge the model already learned — freezing early layers and retraining only the later layers on your domain-specific data. Fine-tuning is the most common form of transfer learning in practice.',
    whyItMatters:
      'Training a model from scratch requires massive datasets and compute that most organizations cannot afford. Transfer learning democratizes AI by letting teams achieve high accuracy on specialized tasks with small datasets (hundreds to thousands of examples) by standing on the shoulders of billion-dollar pre-training runs. It is the reason a startup can build a competitive AI product without owning a data center.',
    analogy:
      'Like hiring an experienced infrastructure engineer and onboarding them to your specific environment. You don\'t teach them what Linux is — they already know operating systems, networking, and scripting (pre-trained knowledge). You just teach them your specific architecture, tooling, and conventions (task-specific fine-tuning). The onboarding is fast because the foundation is already there.',
    soundsSmartToSay:
      '"We don\'t need to train a model from scratch for our document classifier — we can take a pre-trained model and apply transfer learning with our labeled dataset. A few hundred examples should be enough to reach production-quality accuracy."',
    commonConfusions: [
      'Transfer learning vs fine-tuning: Transfer learning is the broad concept of reusing learned representations across tasks. Fine-tuning is a specific transfer learning technique where you continue training the model on new data. All fine-tuning is transfer learning, but transfer learning also includes techniques like feature extraction where you freeze the model entirely.',
      'Transfer learning works because early layers learn general features (edges, shapes, syntax) that apply across many tasks, while later layers learn task-specific features. This is why you can retrain just the last few layers and still get strong performance.',
      'Negative transfer: Sometimes a pre-trained model\'s knowledge hurts performance on the new task — usually when the source and target domains are too different. Always benchmark against a simple baseline to confirm transfer learning is actually helping.',
    ],
    relatedTerms: ['Fine-Tuning', 'Foundation Model', 'Pre-training', 'Feature Extraction'],
  },
  {
    id: 'ai-quantization',
    domain: 'ai',
    title: 'Model Quantization',
    subtitle: 'Shrink models to run on smaller hardware',
    difficulty: 'advanced',
    tags: ['optimization', 'inference', 'efficiency'],
    definition:
      'Quantization reduces a model\'s memory footprint and inference cost by converting its weights from high-precision formats (32-bit float) to lower-precision ones (8-bit integer, 4-bit). A 70B-parameter model that requires 140GB in fp16 can fit in 35GB at 4-bit quantization.',
    whyItMatters:
      'GPU memory is the bottleneck for deploying large models. Quantization lets you run bigger models on cheaper hardware or serve more concurrent users on the same GPU — often with negligible quality loss at 8-bit and small loss at 4-bit.',
    analogy:
      'Like compressing a high-resolution photo to JPEG. You lose some precision, but the file is 10x smaller and the image is "good enough" for almost all practical purposes. Quantization is lossy compression for model weights.',
    soundsSmartToSay:
      '"Let us benchmark the 4-bit quantized version against the full-precision model on our eval set — if quality holds, we can serve it on a single GPU instead of four."',
    commonConfusions: [
      'Quantization vs distillation: Quantization reduces numeric precision of an existing model. Distillation trains a smaller model to mimic a larger one. Both make models smaller, but the techniques are completely different.',
      'Post-training vs quantization-aware training: Post-training quantization (PTQ) converts an already-trained model. Quantization-aware training (QAT) trains with quantization in the loop for better accuracy — but requires retraining.',
    ],
    relatedTerms: ['Inference', 'GPU', 'GGUF', 'Model Serving'],
  },
];
