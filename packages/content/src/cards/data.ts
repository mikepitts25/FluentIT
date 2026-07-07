import type { Card } from '../types';

export const dataCards: Card[] = [
  {
    id: 'data-engineering',
    domain: 'data',
    title: 'Data Engineering',
    subtitle: 'Building the pipelines and platforms that make data usable',
    difficulty: 'beginner',
    tags: ['pipelines', 'infrastructure', 'analytics', 'platform'],
    definition:
      'Data engineering is the discipline of designing, building, and operating the systems that collect, transform, store, govern, and deliver data. It turns raw application events, database records, files, and third-party feeds into reliable datasets for analytics, AI, reporting, and operational workflows.',
    whyItMatters:
      'Most organizations have plenty of data but little trusted, usable data. Data engineering is what makes dashboards accurate, ML models trainable, compliance reporting repeatable, and business decisions less dependent on spreadsheet archaeology.',
    analogy:
      'Like building roads, utilities, and warehouses for a city. Data scientists and analysts can create value only if the underlying routes, storage, and maintenance crews keep goods moving reliably.',
    soundsSmartToSay:
      '"Before we debate another BI tool, we need to invest in data engineering basics: source ingestion, quality checks, lineage, and ownership for the datasets everyone depends on."',
    commonConfusions: [
      'Data engineering vs data science: Data engineering builds and operates the data supply chain. Data science uses data to model, predict, experiment, and explain.',
      'Data engineering is not just ETL scripts. It includes orchestration, data modeling, quality, governance, security, cost management, and platform reliability.',
    ],
    relatedTerms: ['ETL / ELT', 'Data Pipeline', 'Data Warehouse', 'Pipeline Orchestration'],
  },
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
      'Without ETL/ELT pipelines, every analytics report would query source systems directly — degrading production performance and delivering inconsistent results.',
    analogy:
      'Like a water treatment plant — raw water is extracted from the river, filtered and treated, then delivered to homes ready to use.',
    soundsSmartToSay:
      '"ELT makes more sense for us than ETL — our cloud warehouse has the compute to transform at scale, and loading raw data first preserves full fidelity."',
    commonConfusions: [
      'ETL vs ELT: In ETL, transformation happens before loading. In ELT, raw data loads first and SQL transforms happen inside the warehouse.',
      'dbt handles the T in ELT. Airflow/Prefect orchestrate the pipeline schedule. Fivetran/Airbyte handle the extraction.',
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
      'A data warehouse stores structured, historical data optimized for analytical queries — aggregations, reports, and BI dashboards. Modern cloud warehouses (Snowflake, BigQuery, Redshift) separate compute from storage.',
    whyItMatters:
      'Your transactional database is designed for fast single-row reads and writes. Analytics queries across millions of rows would destroy its performance. A warehouse is built for exactly that.',
    analogy:
      'Like a library archive vs a checkout desk. The checkout desk is fast for one transaction. The archive is organized for researchers who need to study thousands of records at once.',
    soundsSmartToSay:
      '"We should not be running our analytics dashboards against the production Postgres replica — we need to push that workload to the warehouse."',
    commonConfusions: [
      'OLTP vs OLAP: OLTP is for the application — fast, row-based. OLAP is for analytics — column-based, optimized for aggregations.',
      'Data warehouse vs data lake: A warehouse has structured, curated data. A data lake stores raw data in any format.',
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
      'Fraud detection, live dashboards, and alerting on operational metrics require streaming. Batch is sufficient for daily reports.',
    analogy:
      'Batch is washing dishes at the end of the day. Streaming is washing each dish immediately after use.',
    soundsSmartToSay:
      '"For our fraud detection use case, batch is not acceptable — we need streaming so decisions happen in milliseconds, not overnight."',
    commonConfusions: [
      'Kafka is a streaming platform. Spark Streaming and Flink are stream processing engines that consume from Kafka.',
      'Near-real-time vs real-time: Most "real-time" analytics have latency of seconds to minutes. True sub-millisecond real-time is a different, harder problem.',
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
      'Schema-on-write requires defining the data structure before storing — strong consistency, validated at insert time. Schema-on-read stores raw data and applies structure at query time — flexible but can surface data quality issues late.',
    whyItMatters:
      'Schema-on-write gives you clean validated data for reporting. Schema-on-read gives flexibility for ML and exploration but requires more discipline in the pipeline.',
    analogy:
      'Schema-on-write is a form with required fields — no submission without all fields filled. Schema-on-read is a free-text notes field — anything goes in, and you make sense of it when you read it.',
    soundsSmartToSay:
      '"Our raw landing zone should be schema-on-read; our curated gold layer in the warehouse should be schema-on-write with contract enforcement."',
    commonConfusions: [
      'Schema-on-read does not mean no schema — it means the schema is applied at query time. You still need a schema; you just enforce it later.',
      'Data contracts and schema registries are how teams enforce schema discipline in schema-on-read systems.',
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
      'Replication copies data changes from a primary database to one or more replicas. It enables read scaling, high availability (promote replica if primary fails), and disaster recovery.',
    whyItMatters:
      'A database with no replicas is a single point of failure. With replicas, you can absorb heavy read load and survive a primary failure with seconds of downtime.',
    analogy:
      'Like making carbon copies of important documents — the original is authoritative, but copies protect you if the original is lost.',
    soundsSmartToSay:
      '"Our replication lag is at 30 seconds — if we are reading from the replica, users could be seeing stale data. We need to check if those reads should hit the primary."',
    commonConfusions: [
      'Read replica vs standby: A read replica serves read queries. A standby (synchronous) replica is kept in sync for failover.',
      'Replication lag is always nonzero in async replication — reads from replicas can see stale data.',
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
      'ACID (Atomicity, Consistency, Isolation, Durability) guarantees reliable transactions — all-or-nothing writes, consistent reads. BASE (Basically Available, Soft state, Eventually consistent) is the model for many NoSQL systems — higher availability and scale at the cost of strict consistency.',
    whyItMatters:
      'Financial transactions, inventory, and order management need ACID. Social media feeds, logs, and recommendation stores can tolerate BASE.',
    analogy:
      'ACID is like a bank transfer — it either fully completes or fully rolls back. BASE is like a social media like count — eventually correct, may be slightly stale.',
    soundsSmartToSay:
      '"Cassandra gives us BASE semantics — for our user preferences store that\'s fine, but we cannot use it for anything requiring transaction guarantees."',
    commonConfusions: [
      'NoSQL does not always mean BASE — MongoDB has ACID transactions. DynamoDB has conditional writes.',
      'The CAP theorem is the theoretical foundation for why ACID and BASE exist as different tradeoffs.',
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
      'dbt lets data analysts write SQL SELECT statements that dbt compiles and runs inside your data warehouse — with dependency management, testing, documentation, and version control built in.',
    whyItMatters:
      'Before dbt, data transformation was often spaghetti SQL scripts nobody owned. dbt brings software engineering practices to data modeling — making transformations maintainable and trustworthy.',
    analogy:
      'Like bringing git, tests, and a build system to SQL — instead of undocumented scripts, you have a clean DAG of transformations with lineage you can visualize.',
    soundsSmartToSay:
      '"We need to add dbt tests for that model — if the source data changes shape, we want the pipeline to fail loudly rather than silently produce wrong numbers."',
    commonConfusions: [
      'dbt is not an ETL tool — it only handles the T (transform). You need a separate tool (Fivetran, Airbyte) to load raw data into the warehouse first.',
      'dbt Core is open source. dbt Cloud is the managed platform with scheduling, CI, and the semantic layer.',
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
      'CDC captures every INSERT, UPDATE, and DELETE in a database and streams those changes to other systems in real time. Tools like Debezium read the database transaction log (WAL in Postgres) without impacting the source DB.',
    whyItMatters:
      'CDC is how you sync production databases to data warehouses, search indexes, or caches without polling (slow) or modifying the source app (risky).',
    analogy:
      'Like getting a live feed of every change to a shared document — instead of downloading the whole document periodically, you get a stream of just the changes.',
    soundsSmartToSay:
      '"We should replace our nightly full-table extracts with CDC — it reduces load on the source DB and gives us much more current data in the warehouse."',
    commonConfusions: [
      'CDC vs polling: Polling queries the DB on a schedule. CDC reads the WAL directly — lower latency, lower load, and catches deletes.',
      'Debezium reads Postgres WAL, MySQL binlog, MongoDB oplog, etc. and publishes changes to Kafka.',
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
      'A data lake is a centralized repository that stores raw data in its native format — structured, semi-structured, or unstructured — at any scale. Cloud object stores like S3, ADLS, or GCS are the typical backing storage.',
    whyItMatters:
      'Data lakes let organizations capture everything now and decide how to use it later — critical for ML and exploratory analytics where you do not know the questions in advance.',
    analogy:
      'If a data warehouse is a well-organized filing cabinet, a data lake is a storage unit where you throw everything in boxes. Cheap and comprehensive, but finding what you need requires more effort.',
    soundsSmartToSay:
      '"We should land the raw event stream into the data lake first, then curate a modeled subset into the warehouse — data science can explore the full history without waiting for engineering to build a pipeline."',
    commonConfusions: [
      'Data lake vs data swamp: Without governance and catalogs, a data lake becomes a "data swamp" — data goes in but nobody can find or trust it.',
      'Object storage (S3) is not a data lake by itself — a data lake also requires a metadata layer, access controls, and cataloging.',
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
      'Data mesh is an architectural paradigm that treats data as a product owned by domain teams. Each domain publishes well-documented, SLA-backed data products on a self-serve platform, following federated governance standards.',
    whyItMatters:
      'Centralized data teams become bottlenecks. Data mesh distributes ownership to the teams who understand the data best, reducing time-to-insight while improving data quality.',
    analogy:
      'Like microservices for data. Just as microservices give each team ownership of their service with a well-defined API contract, data mesh gives each domain ownership of their data products.',
    soundsSmartToSay:
      '"Our central data team is the bottleneck — we should explore data mesh principles so each domain publishes its own data products with clear SLAs."',
    commonConfusions: [
      'Data mesh is not a technology — it is an organizational and architectural paradigm. You do not buy a data mesh product.',
      'Data mesh vs data fabric: Data fabric is a technology-driven integration layer. Data mesh is an organizational model.',
    ],
    relatedTerms: ['Data Product', 'Domain-Driven Design', 'Federated Governance', 'Data Fabric'],
  },
  {
    id: 'data-fabric',
    domain: 'data',
    title: 'Data Fabric',
    subtitle: 'A unified layer for discovering, governing, and accessing distributed data',
    difficulty: 'advanced',
    tags: ['architecture', 'metadata', 'governance', 'integration'],
    definition:
      'A data fabric is a data architecture approach that connects data across warehouses, lakes, databases, applications, and clouds through shared metadata, catalogs, integration, governance, and automation. The goal is a unified, self-service way to find and use trusted data without forcing every dataset into one physical store.',
    whyItMatters:
      'Enterprise data is usually fragmented across departments, SaaS tools, cloud platforms, and legacy systems. A data fabric reduces the friction of finding, governing, and combining that data, which is especially important when AI and analytics teams need trusted context quickly.',
    analogy:
      'Like a transit network map across many neighborhoods. The neighborhoods still exist separately, but the map, routes, rules, and transfer points let people move through the whole city without learning every local street first.',
    soundsSmartToSay:
      '"A data fabric could help us expose governed customer data across Snowflake, S3, and operational systems without pretending one migration will centralize everything."',
    commonConfusions: [
      'Data fabric vs data mesh: A fabric is a technology and architecture layer for connecting, cataloging, and governing distributed data. A mesh is an operating model where domain teams own data products.',
      'Data fabric is not one tool. It usually combines catalogs, metadata, governance, virtualization or integration, lineage, and automation across existing platforms.',
    ],
    relatedTerms: ['Data Mesh', 'Data Catalog', 'Data Governance', 'Data Lineage'],
  },
  {
    id: 'data-sql-vs-nosql',
    domain: 'data',
    title: 'SQL vs NoSQL',
    subtitle: 'Relational tables vs flexible document and key-value stores',
    difficulty: 'beginner',
    tags: ['databases', 'relational', 'document', 'key-value'],
    definition:
      'SQL databases store data in structured tables with rows and columns, enforce schemas, and use SQL. NoSQL databases use flexible data models — documents, key-value pairs, wide columns, or graphs — and often trade strict consistency for horizontal scalability.',
    whyItMatters:
      'Choosing the wrong database model creates pain for years. SQL excels at complex queries and strong consistency. NoSQL excels at massive scale, variable data shapes, and low-latency reads.',
    analogy:
      'SQL is like a spreadsheet with strict column headers — every row must conform. NoSQL is like a folder of JSON files — each document can have different fields.',
    soundsSmartToSay:
      '"We do not need to pick one — user accounts belong in Postgres for transactional integrity, but our product catalog with highly variable attributes is a better fit for a document store."',
    commonConfusions: [
      'NoSQL does not mean "no SQL" — many NoSQL databases support SQL-like query languages.',
      'MongoDB now supports multi-document ACID transactions. The line between SQL and NoSQL has blurred significantly.',
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
      'Data governance is the framework of policies, roles, and processes that ensure data across an organization is accurate, consistent, secure, and used responsibly. It covers data ownership, quality standards, access controls, lineage tracking, and regulatory compliance.',
    whyItMatters:
      'Without governance, organizations make decisions on data nobody trusts and expose themselves to regulatory fines. Good governance means the CFO and the analyst see the same revenue figure.',
    analogy:
      'Like IT security policies but for data. InfoSec defines who can access which systems; data governance defines who owns which datasets, quality standards, and how changes are tracked.',
    soundsSmartToSay:
      '"Before we build another dashboard, we need to agree on data ownership and the golden source for customer metrics — otherwise we are just adding another conflicting number to the pile."',
    commonConfusions: [
      'Data governance vs data management: Governance is the policies and decision rights. Data management is the execution — how we implement those rules in tools and pipelines.',
      'Data steward vs data owner: The owner (business leader) is accountable. The steward (technical) handles day-to-day quality and metadata management.',
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
      'Partitioning divides a large table into smaller pieces within a single database instance — typically by range (date) or hash (user ID) — so queries scan less data. Sharding distributes partitions across multiple database instances, enabling horizontal scale beyond a single server.',
    whyItMatters:
      'A single database table with billions of rows becomes slow to query. Partitioning keeps queries fast by pruning irrelevant data. Sharding lets you scale write throughput across machines.',
    analogy:
      'Like organizing a library. Partitioning is splitting books into sections within one building so you search less. Sharding is opening branch libraries across the city — each holds a subset, serving more readers together.',
    soundsSmartToSay:
      '"We should partition the events table by month — our queries always filter on date range, so the engine can skip scanning years of irrelevant data."',
    commonConfusions: [
      'Partitioning vs sharding: Partitioning splits within one database. Sharding splits across multiple. Sharding adds distributed systems complexity.',
      'Hot partitions: A bad partition key creates hot spots where one partition gets all the load.',
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
      'A data catalog is a centralized metadata repository that lets users discover, understand, and trust data assets. It stores table descriptions, column definitions, ownership, lineage, quality scores, and usage statistics. Tools include DataHub, Amundsen, Atlan, and AWS Glue Data Catalog.',
    whyItMatters:
      'Data engineers and analysts waste enormous time asking "does this table exist?" A catalog makes data self-service — users find what they need and understand its freshness without filing a ticket.',
    analogy:
      'Like a service catalog in ITSM but for datasets. A service catalog tells you what IT services exist, who owns them, and their SLA — a data catalog does the same for datasets.',
    soundsSmartToSay:
      '"We have 2,000 tables in Snowflake and nobody knows which ones are reliable — we need a data catalog with automated lineage so analysts can self-serve."',
    commonConfusions: [
      'A data catalog stores metadata about data, not the data itself.',
      'Automated lineage vs manual documentation: Modern catalogs auto-detect lineage from SQL queries and dbt models.',
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
      'A vector database stores high-dimensional numerical vectors (embeddings) and enables fast similarity search using algorithms like HNSW or IVF. Tools include Pinecone, Weaviate, Milvus, Qdrant, and pgvector for Postgres.',
    whyItMatters:
      'Vector databases are the backbone of modern AI applications — RAG for LLMs, semantic search, recommendation engines, and image similarity all depend on fast nearest-neighbor lookups.',
    analogy:
      'Traditional databases find exact matches. Vector databases find similar matches — like a search engine that understands meaning. If full-text search finds the exact words you typed, vector search finds documents that mean the same thing.',
    soundsSmartToSay:
      '"We are using RAG with a vector database so the LLM can retrieve relevant context from our internal docs at query time — instead of fine-tuning the model, we just index embeddings and let retrieval handle it."',
    commonConfusions: [
      'pgvector works well up to a few million vectors. Purpose-built vector databases are optimized for billions of vectors.',
      'Vector search is approximate, not exact — algorithms like HNSW trade a small amount of accuracy for massive speed gains.',
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
      'A data lakehouse combines the low-cost, scalable storage of a data lake with the ACID transactions, schema enforcement, and query performance of a data warehouse. Open table formats like Apache Iceberg, Delta Lake, and Apache Hudi add a metadata and transaction layer on top of object storage.',
    whyItMatters:
      'Organizations used to maintain both a lake (for data science) and a warehouse (for BI), duplicating data and ETL pipelines. A lakehouse eliminates that duplication — one copy of data serves both workloads.',
    analogy:
      'Like the convergence of dev and ops into DevOps. Data lakes and warehouses used to be separate worlds. The lakehouse merges them — just as DevOps merged development and operations.',
    soundsSmartToSay:
      '"With Iceberg on top of our S3 data lake, we get ACID transactions and time travel without paying for a separate warehouse — our BI tools query the lake directly with warehouse-grade performance."',
    commonConfusions: [
      'A lakehouse is not just a data lake — the key difference is the open table format (Iceberg, Delta Lake) that adds ACID transactions and schema evolution.',
      'Delta Lake was created by Databricks, Iceberg by Netflix. Iceberg has broader engine support; Delta is tightly integrated with Databricks.',
    ],
    relatedTerms: ['Data Lake', 'Apache Iceberg', 'Delta Lake', 'Data Warehouse'],
  },
  {
    id: 'data-quality',
    domain: 'data',
    title: 'Data Quality',
    subtitle: 'Measuring and enforcing that data is fit for purpose',
    difficulty: 'intermediate',
    tags: ['quality', 'observability', 'testing'],
    definition:
      'Data quality refers to the accuracy, completeness, consistency, timeliness, and validity of data. Data quality frameworks (like the Great Expectations library) define expectations ("column X should never be null," "values should be in the range 0–100") and test every data load against those expectations, alerting when data violates them.',
    whyItMatters:
      'Bad data produces bad decisions. A pipeline that silently introduces null values or duplicates can corrupt analytics reports that executives use for strategic decisions — and the source of the corruption may not be discovered for months.',
    analogy:
      'Like quality control in manufacturing — every product off the assembly line is measured against spec tolerances. Data quality applies the same discipline to data products: define what "good" looks like and reject anything that does not meet the spec.',
    soundsSmartToSay:
      '"We need data quality checks at every layer of our pipeline — not just in the source, but after the dbt transformations too, since transform bugs can introduce quality issues even when the source is clean."',
    commonConfusions: [
      'Data quality vs data governance: Governance defines the policies and standards ("revenue column should be non-null"). Data quality is the practice of measuring and enforcing those standards in the pipeline.',
      'Data observability extends data quality: Tools like Monte Carlo and Bigeye add anomaly detection — automatically detecting when data patterns shift, even without predefined rules.',
    ],
    relatedTerms: ['Data Governance', 'Great Expectations', 'Data Observability', 'Data Catalog'],
  },
  {
    id: 'data-contracts',
    domain: 'data',
    title: 'Data Contracts',
    subtitle: 'Formal agreements between data producers and consumers',
    difficulty: 'advanced',
    tags: ['schema evolution', 'producer-consumer', 'governance'],
    definition:
      'A data contract is a formal specification that defines the schema, semantics, SLA, and ownership of a data asset — agreed upon between the team that produces it and the teams that consume it. It enforces that producers cannot make breaking changes without coordinating with consumers.',
    whyItMatters:
      'In large data platforms, a producer team silently renaming a column or changing a data type can break dozens of downstream pipelines. Data contracts create a versioned API contract for data, treating breaking changes with the same rigor as API versioning.',
    analogy:
      'Like a REST API contract between services. If the payment service removes a field from its API, every consuming service breaks. Data contracts apply the same principle to data assets — producers must version and communicate changes just like software teams version APIs.',
    soundsSmartToSay:
      '"We should formalize data contracts on our core business entities — if the CRM team changes the customer schema, downstream teams need advance notice and migration time, not a broken pipeline on Monday morning."',
    commonConfusions: [
      'Data contracts vs schema registry: A schema registry enforces structural compatibility (Avro/Protobuf schemas). A data contract is broader — it includes semantics, SLA commitments, and ownership.',
      'Data contracts are not just documentation — they should be machine-readable and enforced in pipelines through automated validation.',
    ],
    relatedTerms: ['Schema Registry', 'Data Quality', 'Data Mesh', 'Schema Evolution'],
  },
  {
    id: 'data-indexing',
    domain: 'data',
    title: 'Database Indexing',
    subtitle: 'Speeding up queries without reading the whole table',
    difficulty: 'intermediate',
    tags: ['performance', 'query optimization', 'databases'],
    definition:
      'A database index is a data structure (typically a B-tree or hash) that allows the database engine to find rows matching a WHERE clause without scanning the entire table. Creating an index on frequently queried columns dramatically speeds up read performance at the cost of additional storage and slower writes.',
    whyItMatters:
      'A table with 100 million rows and no index on the queried column does a full table scan on every query — taking minutes. The same query with a proper index executes in milliseconds. Indexing strategy is one of the highest-leverage performance optimizations available.',
    analogy:
      'Like the index at the back of a textbook. Without it, finding every mention of "TCP" requires reading every page. With the index, you go directly to pages 45, 112, and 287.',
    soundsSmartToSay:
      '"This query is doing a sequential scan on 50 million rows — adding a composite index on (user_id, created_at) would turn this from a 30-second query into a sub-millisecond lookup."',
    commonConfusions: [
      'More indexes are not always better: Every index speeds up reads but slows down writes (the index must be maintained on every INSERT/UPDATE/DELETE). Over-indexing hurts write-heavy workloads.',
      'Index type matters: B-tree indexes work for range queries and equality checks. Hash indexes are for equality only. Full-text indexes support text search. Partial indexes index only rows matching a condition.',
    ],
    relatedTerms: ['Query Optimizer', 'EXPLAIN Plan', 'B-tree', 'Composite Index'],
  },
  {
    id: 'data-pipeline-orchestration',
    domain: 'data',
    title: 'Pipeline Orchestration',
    subtitle: 'Scheduling, monitoring, and managing data workflow dependencies',
    difficulty: 'intermediate',
    tags: ['Airflow', 'DAG', 'scheduling'],
    definition:
      'Pipeline orchestration tools (Apache Airflow, Prefect, Dagster, Mage) define data workflows as directed acyclic graphs (DAGs), schedule them on a timetable, manage dependencies between tasks, retry failed steps, alert on failures, and provide visibility into pipeline runs.',
    whyItMatters:
      'A modern data stack has dozens of pipelines with complex dependencies — the transformation layer cannot run until the ELT completes, which cannot run until the extraction succeeds. Orchestrators manage these dependencies and provide the operational visibility to debug failures without manually tracing every step.',
    analogy:
      'Like a traffic control system at a complex intersection — it ensures vehicles (data tasks) proceed in the right order, stops those that should wait for others, reroutes when a lane is blocked, and logs everything so you can investigate delays.',
    soundsSmartToSay:
      '"We should migrate from cron jobs to Airflow — our pipelines have grown to have 15 interdependencies and a single cron failure silently causes downstream tasks to run on stale data with no alerts."',
    commonConfusions: [
      'Airflow vs Prefect vs Dagster: Airflow is the oldest and most widely deployed. Prefect and Dagster are newer and offer better developer experience and dynamic DAGs. All three solve similar orchestration problems.',
      'Orchestration vs streaming: Orchestrators schedule batch pipeline runs. Streaming pipelines (Kafka, Flink) process events continuously and do not need a scheduler.',
    ],
    relatedTerms: ['DAG', 'Apache Airflow', 'Prefect', 'Data Pipeline'],
  },
  {
    id: 'data-feature-store',
    domain: 'data',
    title: 'Feature Stores',
    subtitle: 'Centralized repository for ML features shared across models',
    difficulty: 'advanced',
    tags: ['ML', 'feature engineering', 'MLOps'],
    definition:
      'A feature store is a centralized platform that stores, manages, and serves ML features — computed representations of raw data (user age, 30-day purchase count, account risk score) — for both training and real-time inference. It ensures consistency between features used in training and the features served at prediction time.',
    whyItMatters:
      'Training-serving skew (where features computed differently in training vs. production cause poor model performance) is one of the most common ML production bugs. Feature stores solve this by providing a single source of truth for all feature computation.',
    analogy:
      'Like a shared ingredient prep station in a restaurant kitchen — every chef (model) uses the same pre-prepared ingredients (features). Without it, every chef would prepare their own mise en place with slight variations, causing inconsistent dishes.',
    soundsSmartToSay:
      '"Our recommendation model uses 7 days of click history in training but only 1 day in production — that is why model performance degrades after deployment. A feature store would enforce the same computation in both environments."',
    commonConfusions: [
      'Feature stores vs data warehouses: Data warehouses store raw and aggregated data for analytics. Feature stores are optimized for ML feature serving — low-latency point lookups and time-travel for historical training.',
      'Online vs offline feature stores: Online stores (Redis, DynamoDB) serve features at low latency for real-time inference. Offline stores (S3, BigQuery) provide historical features for model training.',
    ],
    relatedTerms: ['MLOps', 'Feature Engineering', 'Training-Serving Skew', 'Model Serving'],
  },
  {
    id: 'data-time-series',
    domain: 'data',
    title: 'Time-Series Databases',
    subtitle: 'Specialized storage for metrics, events, and sensor data over time',
    difficulty: 'intermediate',
    tags: ['time-series', 'metrics', 'InfluxDB'],
    definition:
      'Time-series databases (InfluxDB, Prometheus, TimescaleDB, ClickHouse) are optimized for storing and querying data points indexed by time — infrastructure metrics, IoT sensor readings, financial tick data, application events. They compress sequential numeric data efficiently and support time-based aggregations (averages, rates, rollups) that are expensive in general-purpose databases.',
    whyItMatters:
      'General-purpose databases degrade when storing millions of metrics per second. Time-series databases use columnar storage with specialized compression (delta encoding, run-length encoding) that can reduce storage by 90% while enabling sub-second aggregation queries over billions of data points.',
    analogy:
      'Like specialized graph paper for scientific data — general notebook paper (relational DB) works, but graph paper with pre-drawn axes (time-series DB) is purpose-built for the job and makes measurements easier to record, store, and read.',
    soundsSmartToSay:
      '"We are storing our Prometheus metrics in Postgres and it is already at 2TB with 30-day retention. TimescaleDB or ClickHouse with automated downsampling would give us year-long retention at the same storage cost."',
    commonConfusions: [
      'Time-series DB vs Prometheus: Prometheus is a monitoring system with a built-in time-series database. Thanos and Cortex extend Prometheus for long-term storage. InfluxDB and TimescaleDB are standalone databases.',
      'Downsampling vs raw retention: Storing raw high-resolution data forever is expensive. Downsampling rolls up old data to lower resolution (5-second to 1-minute averages) — trading precision for cost.',
    ],
    relatedTerms: ['Prometheus', 'InfluxDB', 'Observability', 'Columnar Storage'],
  },
  {
    id: 'data-caching',
    domain: 'data',
    title: 'Caching (Redis / Memcached)',
    subtitle: 'Keeping frequently accessed data in fast memory',
    difficulty: 'beginner',
    tags: ['performance', 'Redis', 'latency'],
    definition:
      'A cache stores frequently accessed data in fast memory (RAM) to avoid expensive repeated reads from slower backing stores (databases, APIs). Redis (also used as a message broker and session store) and Memcached are the dominant in-memory cache solutions.',
    whyItMatters:
      'A database query that takes 50ms executed 10,000 times per second would overwhelm any database. The same data served from a Redis cache takes 0.5ms and the database gets one request per cache TTL. Caching is the most common path to dramatic latency improvements.',
    analogy:
      'Like a bartender who memorizes the regular customers\' usual orders — instead of reading the menu (querying the database) every time, they go straight to pouring. Saves time for everyone.',
    soundsSmartToSay:
      '"We should cache the user profile data with a 5-minute TTL — it changes infrequently, is read on every request, and hitting the database 50,000 times per minute for the same data is wasteful."',
    commonConfusions: [
      'Cache vs CDN: A CDN caches static content (files, HTML) at edge locations globally. An in-memory cache (Redis) caches dynamic data (database query results) within your application tier.',
      'Cache invalidation: Knowing when to expire stale cached data is one of the hardest problems in software. Common strategies are TTL-based expiry, event-driven invalidation (write-through), and cache-aside patterns.',
    ],
    relatedTerms: ['Redis', 'TTL', 'Cache Invalidation', 'Latency'],
  },
  {
    id: 'data-observability',
    domain: 'data',
    title: 'Data Observability',
    subtitle: 'Detecting data quality issues before they become business problems',
    difficulty: 'advanced',
    tags: ['monitoring', 'data quality', 'anomaly detection'],
    definition:
      'Data observability is the ability to understand the health of your data across five dimensions: freshness (is it up to date?), volume (has record count changed unexpectedly?), schema (has structure changed?), distribution (have value ranges shifted?), and lineage (what affected this dataset?). Tools like Monte Carlo and Bigeye automate detection of anomalies across these dimensions.',
    whyItMatters:
      'Data pipelines fail silently. Traditional monitoring checks if a job completed; it does not check if the resulting data is correct. A table that loads successfully but with all nulls in a critical column can power incorrect analytics for days before anyone notices.',
    analogy:
      'Like the difference between a car dashboard that tells you if the engine is running versus one that tells you oil pressure, coolant temperature, and tire pressure. The first tells you the car started; the second tells you if it is about to fail.',
    soundsSmartToSay:
      '"We need data observability, not just pipeline monitoring — knowing that the dbt run completed successfully does not tell us whether the revenue column has drifted 40% from its normal distribution."',
    commonConfusions: [
      'Data observability vs data quality testing: Quality tests validate specific expectations (column X is never null). Observability detects unexpected changes even when nothing fails a specific test.',
      'Data observability tools vs traditional monitoring: APM tools (Datadog, New Relic) monitor infrastructure and application behavior. Data observability tools specifically monitor data assets.',
    ],
    relatedTerms: ['Data Quality', 'Data Lineage', 'Anomaly Detection', 'SLA Monitoring'],
  },
  {
    id: 'data-columnar-storage',
    domain: 'data',
    title: 'Columnar Storage',
    subtitle: 'Storing data by column for analytical performance',
    difficulty: 'intermediate',
    tags: ['analytics', 'performance', 'OLAP', 'compression'],
    definition:
      'Columnar storage organizes data on disk by column rather than by row. When an analytics query reads only 3 columns out of 100, columnar storage reads only those 3 columns — skipping 97% of the data. It also enables better compression because similar values appear together (all January sales figures in one block).',
    whyItMatters:
      'Row-oriented storage (PostgreSQL, MySQL) is optimal for OLTP — reading and writing entire rows. Column-oriented storage (Redshift, BigQuery, Snowflake, Parquet) is optimal for OLAP — reading a few columns across billions of rows. Using the wrong storage format can make analytical queries 10-100x slower.',
    analogy:
      'Like organizing a phone book by last name (row-oriented — you find one person quickly) versus organizing one large list of all first names, then one large list of all last names, then one large list of all phone numbers (columnar — you process all phone numbers without touching names).',
    soundsSmartToSay:
      '"We should store our analytics data in Parquet format on S3 rather than CSV — Parquet\'s columnar layout and compression will cut query costs by 80% and reduce scan times from minutes to seconds."',
    commonConfusions: [
      'Columnar storage vs row storage: Row storage reads entire rows efficiently (good for OLTP transactions). Columnar storage reads entire columns efficiently (good for OLAP aggregations). Most modern data stacks use both.',
      'Parquet vs ORC vs Avro: Parquet and ORC are columnar formats for analytics. Avro is a row-oriented format with embedded schemas, better suited for streaming and serialization.',
    ],
    relatedTerms: ['OLAP', 'Parquet', 'Data Warehouse', 'Query Performance'],
  },
];
