import type { Card } from '../types';

export const dataCards: Card[] = [
  {
    id: 'data-etl',
    domain: 'data',
    title: 'ETL / ELT',
    subtitle: 'Extract, Transform, Load — the data pipeline backbone',
    difficulty: 'beginner',
    tags: ['pipeline', 'data engineering', 'warehouse'],
    definition:
      'ETL extracts data from source systems, transforms it (cleans, reshapes, enriches), then loads it into a destination. ELT loads raw data first and transforms inside the destination — typically a cloud data warehouse.',
    whyItMatters:
      'Without ETL/ELT pipelines, every analytics report would query source systems directly — degrading production performance and delivering inconsistent results. ETL is the plumbing that makes analytics possible.',
    analogy:
      'Like a water treatment plant — raw water (raw data) is extracted from the river, filtered and treated (transformed), then delivered to homes (loaded into the warehouse) ready to use.',
    soundsSmartToSay:
      '"ELT makes more sense for us than ETL — our cloud warehouse has the compute to transform at scale, and loading raw data first preserves full fidelity."',
    commonConfusions: [
      'ETL vs ELT: In ETL, transformation happens before loading (in a separate engine). In ELT, raw data loads first and SQL transforms happen inside the warehouse. ELT is dominant in cloud-native stacks.',
      'ETL tools: dbt transforms data inside the warehouse (T in ELT). Airflow/Prefect orchestrate the pipeline schedule. Fivetran/Airbyte handle the extraction. These often work together.',
    ],
    relatedTerms: ['dbt', 'Data Warehouse', 'Data Lake', 'Airflow'],
  },
  {
    id: 'data-warehouse',
    domain: 'data',
    title: 'Data Warehouse',
    subtitle: 'Structured storage for analytics queries',
    difficulty: 'beginner',
    tags: ['analytics', 'OLAP', 'Snowflake'],
    definition:
      'A data warehouse stores structured, historical data optimized for analytical queries — aggregations, reports, and BI dashboards — not for transaction processing. Modern cloud warehouses (Snowflake, BigQuery, Redshift) separate compute from storage.',
    whyItMatters:
      'Your transactional database (Postgres, MySQL) is designed for OLTP — fast single-row reads and writes. Analytics queries (JOIN across millions of rows, GROUP BY, windowed aggregations) would destroy its performance. A warehouse is built for exactly that.',
    analogy:
      'Like a library archive vs a checkout desk. The checkout desk (transactional DB) is fast for one transaction. The archive (warehouse) is organized for researchers who need to study thousands of records at once.',
    soundsSmartToSay:
      '"We should not be running our analytics dashboards against the production Postgres replica — we need to push that workload to the warehouse."',
    commonConfusions: [
      'OLTP vs OLAP: OLTP (Online Transaction Processing) is for the application — fast, row-based. OLAP (Online Analytical Processing) is for analytics — slow, column-based, optimized for aggregations.',
      'Data warehouse vs data lake: A warehouse has structured, curated data with a schema. A data lake stores raw data in any format. A lakehouse (Delta Lake, Apache Iceberg) blends both.',
    ],
    relatedTerms: ['OLAP', 'Snowflake', 'BigQuery', 'Columnar Storage'],
  },
  {
    id: 'data-streaming',
    domain: 'data',
    title: 'Streaming vs Batch',
    subtitle: 'Real-time vs periodic data processing',
    difficulty: 'beginner',
    tags: ['Kafka', 'real-time', 'processing'],
    definition:
      'Batch processing handles data in chunks on a schedule (nightly ETL run). Streaming processes data event-by-event as it arrives, enabling near-real-time insights. Most modern data stacks use both.',
    whyItMatters:
      'Fraud detection, live dashboards, and alerting on operational metrics all require streaming. Batch is sufficient for daily reports. Choosing the wrong model means either stale data or unnecessary complexity.',
    analogy:
      'Batch is like washing dishes at the end of the day. Streaming is washing each dish immediately after use. One is more efficient at scale; the other gives you a clean plate exactly when you need it.',
    soundsSmartToSay:
      '"For our fraud detection use case, batch is not acceptable — we need streaming so decisions happen in milliseconds, not overnight."',
    commonConfusions: [
      'Kafka is a streaming platform (message broker + log). Spark Streaming and Flink are stream processing engines that can consume from Kafka. These work together.',
      'Near-real-time vs real-time: Most "real-time" analytics systems have latency of seconds to minutes. True sub-millisecond real-time is a different, harder problem.',
    ],
    relatedTerms: ['Apache Kafka', 'Apache Flink', 'Spark', 'Lambda Architecture'],
  },
  {
    id: 'data-schema',
    domain: 'data',
    title: 'Schema-on-Read vs Schema-on-Write',
    subtitle: 'When do you define the structure of your data?',
    difficulty: 'intermediate',
    tags: ['schema', 'data lake', 'flexibility'],
    definition:
      'Schema-on-write (relational DBs) requires defining the data structure before storing — strong consistency, validated at insert time. Schema-on-read (data lakes) stores raw data and applies structure at query time — flexible but can surface data quality issues late.',
    whyItMatters:
      'The choice shapes your data architecture. Schema-on-write (warehouse) gives you clean, validated data for reporting. Schema-on-read (lake) gives flexibility for ML and exploration but requires more discipline in the pipeline.',
    analogy:
      'Schema-on-write is like a form with required fields — no submission without all fields filled correctly. Schema-on-read is like a free-text notes field — anything goes in, and you make sense of it when you read it.',
    soundsSmartToSay:
      '"Our raw landing zone should be schema-on-read; our curated gold layer in the warehouse should be schema-on-write with contract enforcement."',
    commonConfusions: [
      'Schema-on-read does not mean no schema — it means the schema is applied at query time. You still need a schema; you just enforce it later.',
      'Data contracts and schema registries (Confluent Schema Registry, AWS Glue) are how teams enforce schema discipline in schema-on-read systems.',
    ],
    relatedTerms: ['Data Catalog', 'Apache Iceberg', 'Data Contracts', 'Data Lake'],
  },
  {
    id: 'data-replication',
    domain: 'data',
    title: 'Database Replication',
    subtitle: 'Keeping multiple copies of data in sync',
    difficulty: 'beginner',
    tags: ['replication', 'HA', 'consistency'],
    definition:
      'Replication is the process of copying data changes from a primary database to one or more replica databases. It enables read scaling (queries hit replicas), high availability (promote replica if primary fails), and disaster recovery.',
    whyItMatters:
      'A database with no replicas is a single point of failure. With replicas, you can absorb heavy read load, survive a primary failure with seconds of downtime, and have cross-region copies for disaster recovery.',
    analogy:
      'Like making carbon copies of important documents — the original is authoritative, but the copies mean you are protected if the original is lost or overwhelmed with requests to read it.',
    soundsSmartToSay:
      '"Our replication lag is at 30 seconds — if we are reading from the replica, users could be seeing stale data. We need to check if those reads should hit the primary."',
    commonConfusions: [
      'Read replica vs standby: A read replica serves read queries. A standby (synchronous) replica is kept in sync for failover but may not serve queries. Some DBs offer both.',
      'Replication lag is always nonzero in async replication — reads from replicas can see stale data. For anything requiring strong consistency, read from the primary.',
    ],
    relatedTerms: ['Primary/Replica', 'CDC', 'Replication Lag', 'Failover'],
  },
  {
    id: 'data-acid',
    domain: 'data',
    title: 'ACID vs BASE',
    subtitle: 'Database consistency models',
    difficulty: 'intermediate',
    tags: ['consistency', 'transactions', 'NoSQL'],
    definition:
      'ACID (Atomicity, Consistency, Isolation, Durability) guarantees reliable transactions in relational DBs — all-or-nothing writes, consistent reads. BASE (Basically Available, Soft state, Eventually consistent) is the model for many NoSQL systems — higher availability and scale at the cost of strict consistency.',
    whyItMatters:
      'Choosing the wrong model is costly. Financial transactions, inventory, and order management need ACID. Social media feeds, logs, and recommendation stores can tolerate BASE — and gain significant scale.',
    analogy:
      'ACID is like a bank transfer — it either fully completes or fully rolls back, never leaves money in limbo. BASE is like a social media like count — eventually correct, may be slightly stale for a moment.',
    soundsSmartToSay:
      '"Cassandra gives us BASE semantics — for our user preferences store that\'s fine, but we cannot use it for anything requiring transaction guarantees."',
    commonConfusions: [
      'NoSQL does not always mean BASE — MongoDB has ACID transactions. DynamoDB has conditional writes. The NoSQL/ACID split is less clean than it used to be.',
      'The CAP theorem (Consistency, Availability, Partition Tolerance — pick 2) is the theoretical foundation for why ACID and BASE exist as different tradeoffs.',
    ],
    relatedTerms: ['CAP Theorem', 'Transaction', 'NoSQL', 'Eventual Consistency'],
  },
  {
    id: 'data-dbt',
    domain: 'data',
    title: 'dbt',
    subtitle: 'Data transformation using SQL + software engineering practices',
    difficulty: 'intermediate',
    tags: ['transformation', 'SQL', 'data modeling'],
    definition:
      'dbt (data build tool) lets data analysts write SQL SELECT statements that dbt compiles and runs inside your data warehouse — with dependency management, testing, documentation, and version control built in.',
    whyItMatters:
      'Before dbt, data transformation was often spaghetti SQL scripts nobody owned. dbt brings software engineering practices (git, tests, CI) to data modeling — making transformations maintainable and trustworthy.',
    analogy:
      'Like bringing git, tests, and a build system to SQL — instead of a mess of stored procedures and undocumented scripts, you have a clean DAG of transformations with lineage you can visualize.',
    soundsSmartToSay:
      '"We need to add dbt tests for that model — if the source data changes shape, we want the pipeline to fail loudly rather than silently produce wrong numbers."',
    commonConfusions: [
      'dbt is not an ETL tool — it only handles the T (transform). You need a separate tool (Fivetran, Airbyte, Stitch) to load raw data into the warehouse before dbt touches it.',
      'dbt Core is open source. dbt Cloud is the managed platform with scheduling, CI, and the semantic layer. Most teams start with dbt Core.',
    ],
    relatedTerms: ['Data Warehouse', 'DAG', 'Data Lineage', 'Semantic Layer'],
  },
  {
    id: 'data-cdc',
    domain: 'data',
    title: 'CDC',
    subtitle: 'Change Data Capture — streaming DB changes to downstream systems',
    difficulty: 'intermediate',
    tags: ['replication', 'streaming', 'Debezium'],
    definition:
      'CDC captures every INSERT, UPDATE, and DELETE in a database and streams those changes to other systems — in real time, in order, and with full fidelity. Tools like Debezium read the database transaction log (WAL in Postgres) without impacting the source DB.',
    whyItMatters:
      'CDC is how you sync production databases to data warehouses, search indexes, or caches without polling (which is slow) or modifying the source app (which is risky). It is the standard for building real-time data pipelines.',
    analogy:
      'Like getting a live feed of every change to a shared document — instead of downloading the whole document periodically to see what changed, you get a stream of just the changes.',
    soundsSmartToSay:
      '"We should replace our nightly full-table extracts with CDC — it reduces load on the source DB and gives us much more current data in the warehouse."',
    commonConfusions: [
      'CDC vs polling: Polling queries the DB on a schedule ("give me rows updated since X"). CDC reads the WAL directly — lower latency, lower load, and catches deletes which polling often misses.',
      'Debezium is the most common open-source CDC tool. It reads Postgres WAL, MySQL binlog, MongoDB oplog, etc. and publishes changes to Kafka.',
    ],
    relatedTerms: ['WAL', 'Debezium', 'Kafka', 'ETL'],
  },
  {
    id: 'data-lake',
    domain: 'data',
    title: 'Data Lake',
    subtitle: 'Store everything raw — figure out the schema later',
    difficulty: 'beginner',
    tags: ['storage', 'raw data', 'S3', 'object storage'],
    definition:
      'A data lake is a centralized repository that stores raw data in its native format — structured, semi-structured, or unstructured — at any scale. Unlike a warehouse, data is not cleaned or modeled before landing. Cloud object stores like S3, ADLS, or GCS are the typical backing storage.',
    whyItMatters:
      'Data lakes let organizations capture everything now and decide how to use it later, which is critical for machine learning and exploratory analytics where you do not know the questions in advance. They also dramatically reduce storage costs compared to warehouses because raw files on object storage are cheap.',
    analogy:
      'If a data warehouse is a well-organized filing cabinet with labeled folders, a data lake is a storage unit where you throw everything in boxes. It is cheap and you keep everything, but finding what you need requires more effort — which is why governance and catalogs matter.',
    soundsSmartToSay:
      '"We should land the raw event stream into the data lake first, then curate a modeled subset into the warehouse — that way data science can explore the full history without waiting for engineering to build a pipeline."',
    commonConfusions: [
      'Data lake vs data swamp: A data lake without governance, metadata, or quality controls becomes a "data swamp" — data goes in but nobody can find or trust it. Catalogs and ownership are essential.',
      'Data lake vs data warehouse: Lakes store raw data cheaply in any format. Warehouses store modeled, query-optimized data. Most modern stacks use both, with the lake as the landing zone.',
      'Object storage (S3) is not a data lake by itself — a data lake also requires a metadata layer, access controls, and cataloging to be useful.',
    ],
    relatedTerms: ['Data Lakehouse', 'S3', 'Schema-on-Read', 'Data Catalog'],
  },
  {
    id: 'data-mesh',
    domain: 'data',
    title: 'Data Mesh',
    subtitle: 'Decentralized, domain-owned data architecture',
    difficulty: 'advanced',
    tags: ['architecture', 'decentralization', 'domain ownership', 'data product'],
    definition:
      'Data mesh is an architectural paradigm that treats data as a product owned by domain teams rather than a centralized data engineering team. Each domain publishes well-documented, SLA-backed data products on a self-serve platform, following federated governance standards. It was introduced by Zhamak Dehghani in 2019.',
    whyItMatters:
      'Centralized data teams become bottlenecks — every new report or pipeline request goes through a single queue. Data mesh distributes ownership to the teams who understand the data best, dramatically reducing time-to-insight while improving data quality because domain experts curate their own outputs.',
    analogy:
      'Think of the shift from monolithic applications to microservices in software engineering. Just as microservices give each team ownership of their service with a well-defined API contract, data mesh gives each domain ownership of their data with a well-defined data product contract.',
    soundsSmartToSay:
      '"Our central data team is the bottleneck — we should explore data mesh principles so each domain publishes its own data products with clear SLAs, and the platform team provides the self-serve infrastructure."',
    commonConfusions: [
      'Data mesh is not a technology — it is an organizational and architectural paradigm. You do not buy a data mesh product; you adopt its principles (domain ownership, data as a product, self-serve platform, federated governance).',
      'Data mesh does not mean no governance — it means federated governance. A central standards body defines interoperability rules (naming, formats, SLAs) that all domains follow.',
      'Data mesh vs data fabric: Data fabric is a technology-driven integration layer (often with AI-assisted metadata). Data mesh is an organizational model. They can complement each other.',
    ],
    relatedTerms: ['Data Product', 'Domain-Driven Design', 'Federated Governance', 'Data Catalog'],
  },
  {
    id: 'data-sql-vs-nosql',
    domain: 'data',
    title: 'SQL vs NoSQL',
    subtitle: 'Relational tables vs flexible document and key-value stores',
    difficulty: 'beginner',
    tags: ['databases', 'relational', 'document', 'key-value'],
    definition:
      'SQL databases (Postgres, MySQL, Oracle) store data in structured tables with rows and columns, enforce schemas, and use SQL for queries. NoSQL databases (MongoDB, DynamoDB, Cassandra, Redis) use flexible data models — documents, key-value pairs, wide columns, or graphs — and often trade strict consistency for horizontal scalability.',
    whyItMatters:
      'Choosing the right database model directly affects development speed, operational cost, and system reliability. SQL is the safe default for most transactional workloads. NoSQL shines when you need massive horizontal scale, flexible schemas, or specialized access patterns like key-value lookups or graph traversals.',
    analogy:
      'SQL is like a spreadsheet with strict column headers — every row must conform. NoSQL (document) is like a folder of JSON files — each document can have different fields. The spreadsheet is easier to query across rows; the folder is more flexible per record.',
    soundsSmartToSay:
      '"We do not need to pick one — our user accounts belong in Postgres for transactional integrity, but our product catalog with highly variable attributes is a better fit for a document store like MongoDB."',
    commonConfusions: [
      'NoSQL does not mean "no SQL" — many NoSQL databases support SQL-like query languages (Cassandra has CQL, DynamoDB has PartiQL). The name originally meant "Not Only SQL."',
      'NoSQL does not automatically scale better. A well-tuned Postgres instance handles most workloads. NoSQL advantages appear at extreme write throughput or when you need to distribute data across many nodes with flexible schemas.',
      'MongoDB now supports multi-document ACID transactions, and Postgres supports JSON documents — the line between SQL and NoSQL has blurred significantly.',
    ],
    relatedTerms: ['ACID vs BASE', 'Document Database', 'Key-Value Store', 'Graph Database'],
  },
  {
    id: 'data-governance',
    domain: 'data',
    title: 'Data Governance',
    subtitle: 'Policies, ownership, and quality controls for organizational data',
    difficulty: 'intermediate',
    tags: ['compliance', 'quality', 'ownership', 'policy'],
    definition:
      'Data governance is the framework of policies, roles, and processes that ensure data across an organization is accurate, consistent, secure, and used responsibly. It covers data ownership, quality standards, access controls, lineage tracking, and regulatory compliance (GDPR, HIPAA, SOX).',
    whyItMatters:
      'Without governance, organizations make decisions on data nobody trusts, expose themselves to regulatory fines, and waste engineering time reconciling conflicting numbers. Good governance means the CFO and the analyst see the same revenue figure — and you can prove to auditors exactly where it came from.',
    analogy:
      'Like IT security policies but for data. Just as InfoSec defines who can access which systems, under what conditions, with what audit trail — data governance defines who owns which datasets, who can access them, what quality standards they must meet, and how changes are tracked.',
    soundsSmartToSay:
      '"Before we build another dashboard, we need to agree on data ownership and define the golden source for customer metrics — otherwise we are just adding another conflicting number to the pile."',
    commonConfusions: [
      'Data governance vs data management: Governance is the policies and decision rights ("who decides, what are the rules"). Data management is the execution ("how we implement those rules in tools and pipelines").',
      'Data governance is not just compliance — GDPR and HIPAA are drivers, but governance also covers data quality, consistency, and discoverability. Compliance-only governance misses most of the value.',
      'Data steward vs data owner: The data owner (usually a business leader) is accountable for a dataset. The data steward (often technical) handles day-to-day quality and metadata management on behalf of the owner.',
    ],
    relatedTerms: ['Data Catalog', 'Data Lineage', 'Data Quality', 'GDPR'],
  },
  {
    id: 'data-partitioning-sharding',
    domain: 'data',
    title: 'Partitioning and Sharding',
    subtitle: 'Splitting data for performance and scale',
    difficulty: 'intermediate',
    tags: ['scalability', 'databases', 'performance', 'distributed systems'],
    definition:
      'Partitioning divides a large table into smaller pieces within a single database instance — typically by range (date) or hash (user ID) — so queries scan less data. Sharding distributes those partitions across multiple database instances (nodes), enabling horizontal scale beyond what one server can handle.',
    whyItMatters:
      'A single database table with billions of rows becomes slow to query and expensive to index. Partitioning keeps queries fast by pruning irrelevant data. Sharding lets you scale write throughput and storage across machines — critical for high-growth applications that outgrow a single server.',
    analogy:
      'Like organizing a library. Partitioning is splitting books into sections (fiction, non-fiction, reference) within one building so you search less. Sharding is opening branch libraries across the city — each branch holds a subset, and together they serve more readers than one building ever could.',
    soundsSmartToSay:
      '"We should partition the events table by month — our queries always filter on date range, so the engine can skip scanning years of irrelevant data. If write volume keeps growing, we can look at sharding across nodes."',
    commonConfusions: [
      'Partitioning vs sharding: Partitioning splits data within one database instance. Sharding splits data across multiple instances. Sharding implies partitioning, but partitioning does not imply sharding.',
      'Hot partitions (or hot shards): If your partition key is poorly chosen (e.g., country, where 80% of users are in one country), one partition gets all the load. Choose keys with even distribution.',
      'Sharding adds significant operational complexity — cross-shard queries, rebalancing, and distributed transactions all become harder. Do not shard until you actually need to.',
    ],
    relatedTerms: ['Horizontal Scaling', 'Consistent Hashing', 'Database Replication', 'Index'],
  },
  {
    id: 'data-catalog',
    domain: 'data',
    title: 'Data Catalog',
    subtitle: 'A searchable inventory of your organization\'s data assets',
    difficulty: 'intermediate',
    tags: ['metadata', 'discovery', 'governance', 'lineage'],
    definition:
      'A data catalog is a centralized metadata repository that lets users discover, understand, and trust data assets across the organization. It stores table descriptions, column definitions, ownership, lineage, quality scores, and usage statistics. Tools include DataHub, Amundsen, Atlan, and cloud-native options like AWS Glue Data Catalog.',
    whyItMatters:
      'Data engineers and analysts waste enormous time asking "does this table exist?" and "can I trust this column?" A catalog makes data self-service — users find what they need, understand its meaning and freshness, and see how it flows through the pipeline, without filing a ticket.',
    analogy:
      'Like a service catalog in ITSM (ServiceNow) but for datasets. Just as a service catalog tells you what IT services exist, who owns them, and their SLA — a data catalog tells you what datasets exist, who owns them, and their quality guarantees.',
    soundsSmartToSay:
      '"We have 2,000 tables in Snowflake and nobody knows which ones are reliable — we need a data catalog with automated lineage so analysts can self-serve instead of pinging the data team for every question."',
    commonConfusions: [
      'A data catalog is not a data warehouse — the catalog stores metadata about data (descriptions, lineage, ownership), not the data itself. Think of it as the card catalog in a library, not the books.',
      'Data catalog vs data dictionary: A data dictionary defines column names and types for a single database. A catalog spans all data assets across the organization and adds lineage, ownership, and discoverability.',
      'Automated lineage vs manual documentation: Modern catalogs (DataHub, Atlan) can auto-detect lineage from SQL queries and dbt models, reducing the burden of keeping documentation current.',
    ],
    relatedTerms: ['Data Governance', 'Data Lineage', 'Metadata', 'DataHub'],
  },
  {
    id: 'data-vector-databases',
    domain: 'data',
    title: 'Vector Databases',
    subtitle: 'Purpose-built storage for AI embeddings and similarity search',
    difficulty: 'advanced',
    tags: ['AI', 'embeddings', 'similarity search', 'machine learning'],
    definition:
      'A vector database stores high-dimensional numerical vectors (embeddings) and enables fast similarity search using algorithms like HNSW or IVF. Embeddings are generated by ML models that convert text, images, or other data into dense vectors where similar items are close together in vector space. Tools include Pinecone, Weaviate, Milvus, Qdrant, and pgvector for Postgres.',
    whyItMatters:
      'Vector databases are the backbone of modern AI applications — RAG (Retrieval-Augmented Generation) for LLMs, semantic search, recommendation engines, and image similarity all depend on fast nearest-neighbor lookups across millions of embeddings. Without them, every AI query would require re-processing the entire corpus.',
    analogy:
      'Traditional databases find exact matches (WHERE name = "Alice"). Vector databases find similar matches — like a search engine that understands meaning. If full-text search is looking for the exact words you typed, vector search is finding documents that mean the same thing even if they use different words.',
    soundsSmartToSay:
      '"We are using RAG with a vector database so the LLM can retrieve relevant context from our internal docs at query time — instead of fine-tuning the model on proprietary data, we just index embeddings and let retrieval handle it."',
    commonConfusions: [
      'Vector databases vs adding a vector extension: pgvector adds vector search to Postgres and works well up to a few million vectors. Purpose-built vector databases (Pinecone, Milvus) are optimized for billions of vectors with specialized indexing and hardware acceleration.',
      'Embeddings are not the raw data — they are numerical representations generated by ML models. The vector database stores these representations and the original data (or a pointer to it) side by side.',
      'Vector search is approximate, not exact — algorithms like HNSW trade a small amount of accuracy for massive speed gains. You tune the recall/speed tradeoff based on your use case.',
    ],
    relatedTerms: ['RAG', 'Embeddings', 'Similarity Search', 'HNSW'],
  },
  {
    id: 'data-lakehouse',
    domain: 'data',
    title: 'Data Lakehouse',
    subtitle: 'Warehouse-grade queries on lake-scale storage',
    difficulty: 'intermediate',
    tags: ['architecture', 'Delta Lake', 'Apache Iceberg', 'hybrid'],
    definition:
      'A data lakehouse combines the low-cost, scalable storage of a data lake with the ACID transactions, schema enforcement, and query performance of a data warehouse. Open table formats like Apache Iceberg, Delta Lake, and Apache Hudi add a metadata and transaction layer on top of files in object storage (S3, ADLS), enabling warehouse-like behavior without moving data into a separate system.',
    whyItMatters:
      'Organizations used to maintain both a lake (for data science and raw storage) and a warehouse (for BI and reporting), duplicating data and ETL pipelines. A lakehouse eliminates that duplication — one copy of data serves both workloads, reducing cost, complexity, and the risk of inconsistency between the two systems.',
    analogy:
      'Like the convergence of dev and ops into DevOps. Data lakes and warehouses used to be separate worlds with separate teams and separate copies of data. The lakehouse merges them into one platform — just as DevOps merged development and operations into one workflow.',
    soundsSmartToSay:
      '"With Iceberg on top of our S3 data lake, we get ACID transactions and time travel without paying for a separate warehouse — our BI tools query the lake directly with warehouse-grade performance."',
    commonConfusions: [
      'A lakehouse is not just a data lake — the key difference is the open table format (Iceberg, Delta Lake) that adds ACID transactions, schema evolution, and time travel on top of raw file storage.',
      'Delta Lake vs Apache Iceberg: Both are open table formats that enable the lakehouse pattern. Delta Lake was created by Databricks, Iceberg by Netflix. Iceberg has broader engine support (Spark, Trino, Flink); Delta is tightly integrated with Databricks.',
      'You do not need to choose between a lakehouse and a warehouse — many organizations use a lakehouse for the raw and curated layers and still push aggregated data to Snowflake or BigQuery for BI teams who prefer those tools.',
    ],
    relatedTerms: ['Data Lake', 'Apache Iceberg', 'Delta Lake', 'Data Warehouse'],
  },
  {
    id: 'data-lake',
    domain: 'data',
    title: 'Data Lake',
    subtitle: 'Store everything, structure later',
    difficulty: 'beginner',
    tags: ['storage', 'architecture', 'raw-data'],
    definition:
      'A data lake is a centralized repository that stores raw data in its native format — structured, semi-structured, and unstructured — at any scale. Unlike a warehouse that requires schema upfront, a data lake ingests first and applies structure at query time.',
    whyItMatters:
      'Organizations generate data faster than they can define schemas. A data lake captures everything — logs, clickstreams, IoT telemetry, images — so data scientists and engineers can explore and derive value from it later without losing fidelity.',
    analogy:
      'Like a warehouse (physical one) where you dump everything in boxes labeled by source. A data warehouse is a retail store — products are sorted, labeled, and shelved for easy browsing. The lake holds the raw inventory.',
    soundsSmartToSay:
      '"We should land the raw data in the lake first and build curated layers on top — do not transform before we understand what questions we need to answer."',
    commonConfusions: [
      'Data lake vs data warehouse: A warehouse stores structured, processed data for fast BI queries. A lake stores raw, unprocessed data for flexible exploration. Most modern architectures have both.',
      'Data lake vs data swamp: A lake without governance, cataloging, or quality controls becomes a data swamp — terabytes of data nobody can find or trust. Governance is what separates a useful lake from a dumping ground.',
    ],
    relatedTerms: ['Data Warehouse', 'Data Lakehouse', 'Object Storage', 'Schema-on-Read'],
  },
  {
    id: 'data-mesh',
    domain: 'data',
    title: 'Data Mesh',
    subtitle: 'Decentralize data ownership to the teams that know it',
    difficulty: 'advanced',
    tags: ['architecture', 'decentralization', 'ownership'],
    definition:
      'Data Mesh is an organizational and architectural paradigm where domain teams own, produce, and serve their data as a product — with shared infrastructure, governance standards, and self-service tooling. It moves away from centralized data teams being the bottleneck for every data request.',
    whyItMatters:
      'Centralized data teams cannot scale to serve every domain\'s needs. Data Mesh distributes ownership so the team that understands the data best (orders, payments, logistics) also owns its quality, SLAs, and documentation — like microservices for data.',
    analogy:
      'Like the shift from monolithic applications to microservices. Just as microservices let each team own their service independently, Data Mesh lets each team own their data product independently — with shared standards for interoperability.',
    soundsSmartToSay:
      '"We should treat the orders data as a product with an SLA, a schema contract, and an owner — not a table that the data team copies into the warehouse and hopes stays correct."',
    commonConfusions: [
      'Data Mesh vs data lake: A data lake is a storage technology. Data Mesh is an organizational model. You can implement Data Mesh on top of a data lake — the mesh defines who owns the data, the lake is where it lives.',
      'Data Mesh does not mean no standards: Decentralized ownership still requires centralized governance for interoperability — common formats, shared catalogs, and cross-domain quality metrics.',
    ],
    relatedTerms: ['Data Product', 'Domain-Driven Design', 'Data Governance', 'Microservices'],
  },
  {
    id: 'data-sql-nosql',
    domain: 'data',
    title: 'SQL vs NoSQL',
    subtitle: 'Relational tables vs flexible document stores',
    difficulty: 'beginner',
    tags: ['databases', 'fundamentals', 'comparison'],
    definition:
      'SQL databases (Postgres, MySQL, Oracle) store data in structured rows and columns with enforced schemas and ACID transactions. NoSQL databases (MongoDB, DynamoDB, Cassandra) use flexible schemas — documents, key-value pairs, or wide columns — and trade strict consistency for horizontal scalability.',
    whyItMatters:
      'Choosing the wrong database model creates pain for years. SQL excels at complex queries and strong consistency (financial transactions). NoSQL excels at massive scale, variable data shapes, and low-latency reads (user profiles, IoT, session stores).',
    analogy:
      'SQL is a spreadsheet with enforced columns — every row must have the same fields. NoSQL is a filing cabinet where each folder can have different documents inside. The spreadsheet is easier to query; the filing cabinet is more flexible.',
    soundsSmartToSay:
      '"For this use case we need strong consistency and complex joins — a relational database is the right choice. NoSQL would trade away guarantees we actually need."',
    commonConfusions: [
      'NoSQL does not mean "no SQL": Many NoSQL databases support SQL-like query languages (DynamoDB PartiQL, CQL for Cassandra). The name originally meant "Not Only SQL."',
      'NoSQL is not always faster: For complex analytical queries with joins, SQL databases often outperform NoSQL. NoSQL wins on write throughput and horizontal scaling for simple access patterns.',
    ],
    relatedTerms: ['ACID', 'BASE', 'Database Replication', 'Schema Design'],
  },
  {
    id: 'data-governance',
    domain: 'data',
    title: 'Data Governance',
    subtitle: 'Rules, ownership, and trust for your data',
    difficulty: 'intermediate',
    tags: ['quality', 'compliance', 'organization'],
    definition:
      'Data governance is the set of policies, processes, and standards that ensure data is accurate, consistent, secure, and compliant across an organization. It defines who owns data, who can access it, what quality standards apply, and how long it is retained.',
    whyItMatters:
      'Without governance, teams make decisions on conflicting versions of the same metric, PII leaks into analytics datasets, and nobody knows which data to trust. Governance is what makes data an asset instead of a liability.',
    analogy:
      'Like building codes for data. Just as building codes ensure structures are safe, data governance ensures data is trustworthy. Without codes, some buildings are excellent and some collapse — you cannot tell which is which until it is too late.',
    soundsSmartToSay:
      '"We need a data governance framework before we scale our analytics — otherwise every team will define revenue differently and nobody will trust the dashboard."',
    commonConfusions: [
      'Data governance vs data management: Data management is the technical work (ETL, storage, quality checks). Data governance is the organizational framework that directs and oversees that work.',
      'Governance is not just compliance: GDPR compliance is one output of governance, but governance also covers data quality, lineage, cataloging, and business definitions — it serves analytics teams, not just auditors.',
    ],
    relatedTerms: ['Data Catalog', 'Data Quality', 'Data Steward', 'GDPR'],
  },
  {
    id: 'data-partitioning',
    domain: 'data',
    title: 'Partitioning and Sharding',
    subtitle: 'Divide data to conquer scale',
    difficulty: 'intermediate',
    tags: ['scalability', 'databases', 'performance'],
    definition:
      'Partitioning splits a table into smaller pieces within a single database (by date, region, or hash). Sharding distributes those pieces across multiple database servers. Both reduce query scope and enable horizontal scaling, but sharding adds cross-server coordination complexity.',
    whyItMatters:
      'A single database server has finite CPU, memory, and disk. Partitioning keeps queries fast by scanning only relevant data. Sharding lets you grow beyond a single machine — it is how every large-scale database (DynamoDB, Cassandra, Vitess) handles billions of rows.',
    analogy:
      'Partitioning is like filing papers by month into different drawers of the same cabinet. Sharding is distributing those drawers across different offices in different cities — you can search in parallel, but coordinating across offices is harder.',
    soundsSmartToSay:
      '"We should partition the events table by date — queries always filter on a time range, so the database can skip 99% of the data without a full scan."',
    commonConfusions: [
      'Partitioning vs sharding: Partitioning is within one database server. Sharding splits across multiple servers. Partitioning is almost free; sharding introduces distributed systems complexity (cross-shard joins, rebalancing, consistency).',
      'Shard key selection is critical: A bad shard key creates hot spots (one server handles 90% of traffic). A good shard key distributes load evenly and matches your access patterns.',
    ],
    relatedTerms: ['Database Replication', 'Horizontal Scaling', 'Index', 'Hot Spots'],
  },
  {
    id: 'data-catalog',
    domain: 'data',
    title: 'Data Catalog',
    subtitle: 'A searchable inventory of your data assets',
    difficulty: 'intermediate',
    tags: ['discovery', 'metadata', 'governance'],
    definition:
      'A data catalog is a metadata management tool that indexes every dataset, table, column, and pipeline in your organization — with descriptions, owners, lineage, quality scores, and usage statistics. Think of it as the search engine for your data.',
    whyItMatters:
      'In large organizations, data teams waste 30% or more of their time just finding and understanding data. A catalog eliminates "does this table exist?" and "who owns this column?" questions and is a prerequisite for effective data governance.',
    analogy:
      'Like a library card catalog for your data warehouse. Without it, you have a warehouse full of unmarked boxes — everything is there but nobody can find anything. Tools like DataHub, Amundsen, and Atlan are the modern card catalog.',
    soundsSmartToSay:
      '"Before we build another dashboard, we need to catalog our data sources and define business-level descriptions for each metric — otherwise we are building on definitions nobody agrees on."',
    commonConfusions: [
      'Data catalog vs data dictionary: A data dictionary describes the technical schema (column names, types). A catalog adds business context (ownership, descriptions, lineage, quality) and makes it searchable.',
      'A catalog is only useful if it is maintained: Auto-cataloging tools can index schemas automatically, but business descriptions and ownership still require human input. An outdated catalog is worse than no catalog.',
    ],
    relatedTerms: ['Data Governance', 'Metadata', 'Data Lineage', 'Data Discovery'],
  },
  {
    id: 'data-vector-db',
    domain: 'data',
    title: 'Vector Databases',
    subtitle: 'Search by meaning, not by keyword',
    difficulty: 'advanced',
    tags: ['ai', 'embeddings', 'search'],
    definition:
      'Vector databases (Pinecone, Weaviate, Milvus, pgvector) store and index high-dimensional vectors — numerical representations of text, images, or audio generated by AI models. They enable similarity search: "find items most similar to this" rather than exact keyword matching.',
    whyItMatters:
      'Vector databases are the foundation of RAG (Retrieval-Augmented Generation) in AI applications. When an LLM needs to answer questions about your documents, a vector database finds the most relevant passages by semantic similarity — not just keyword match.',
    analogy:
      'Traditional databases find exact matches (like finding a book by ISBN). Vector databases find similar items (like finding books similar to one you enjoyed). The "index" is not alphabetical — it is a map of meaning in high-dimensional space.',
    soundsSmartToSay:
      '"We should use pgvector for our RAG pipeline — we already run Postgres, and the volume does not justify a dedicated vector database yet."',
    commonConfusions: [
      'Vector database vs embedding model: The embedding model converts text/images into vectors. The vector database stores and searches those vectors. You need both — the model produces, the database retrieves.',
      'Vector search vs full-text search: Full-text search (Elasticsearch) matches keywords and their variants. Vector search matches semantic meaning — "automobile" and "car" are close in vector space even though they share no characters.',
    ],
    relatedTerms: ['Embeddings', 'RAG', 'Similarity Search', 'Pinecone'],
  },
  {
    id: 'data-lakehouse',
    domain: 'data',
    title: 'Data Lakehouse',
    subtitle: 'Warehouse performance on lake storage',
    difficulty: 'intermediate',
    tags: ['architecture', 'analytics', 'hybrid'],
    definition:
      'A data lakehouse combines the low-cost, flexible storage of a data lake with the schema enforcement, ACID transactions, and query performance of a data warehouse. Technologies like Delta Lake, Apache Iceberg, and Apache Hudi add a metadata and transaction layer on top of object storage (S3, GCS).',
    whyItMatters:
      'Maintaining separate lakes and warehouses means duplicating data, complex ETL pipelines, and inconsistency between raw and processed data. A lakehouse collapses both into one architecture — one copy of the data serving both data science and BI.',
    analogy:
      'Like converting a raw warehouse into a retail-ready store without moving the inventory. The same boxes (Parquet files in S3) stay in place, but you add shelving, labels, and a checkout system (Iceberg metadata, ACID transactions) on top.',
    soundsSmartToSay:
      '"We should evaluate Apache Iceberg as our table format — it gives us time travel, schema evolution, and partition pruning on top of our existing S3 data lake without migrating anything."',
    commonConfusions: [
      'Lakehouse vs data lake: A data lake stores raw files. A lakehouse adds a metadata layer that enables warehouse-like features (ACID, schema enforcement, time travel) on top of lake storage.',
      'You do not need to choose between a lakehouse and a warehouse — many organizations use a lakehouse for the raw and curated layers and still push aggregated data to Snowflake or BigQuery for BI teams who prefer those tools.',
    ],
    relatedTerms: ['Data Lake', 'Apache Iceberg', 'Delta Lake', 'Data Warehouse'],
  },
];
