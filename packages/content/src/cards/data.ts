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
];
