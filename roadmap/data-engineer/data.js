/* Google Cloud Professional Data Engineer Certification Roadmap data */
window.ROADMAP_DATA_ENGINEER = {
  decks: {
    "adk-bigquery-agents-slides": [
      "Data Agents with ADK & BigQuery",
      "Build grounded, evaluated conversational analytics agents over enterprise BigQuery data."
    ]
  },
  related: {
    "de4-ml": ["adk-bigquery-agents-slides"],
    "de4-analytics": ["adk-bigquery-agents-slides"]
  },
  stages: [
    {
      k: "de1", n: "Domain 1", t: "Designing Data Systems", w: "22%", c: "#4285f4",
      doc: "https://cloud.google.com/learn/certification/guides/data-engineer",
      l: [
        ["de1-arch", "1.1", "Storage & Processing Architecture"],
        ["de1-security", "1.2", "Security, Privacy & Compliance"],
        ["de1-migration", "1.3", "Reliability, Scaling & Migration"]
      ],
      r: [
        ["de1-matrix", "1.4", "Service Selection Matrix", "r"],
        ["de1-practice", "", "Domain 1 Exam Focus", "q"]
      ]
    },
    {
      k: "de2", n: "Domain 2", t: "Ingesting & Processing Data", w: "25%", c: "#34a853",
      doc: "https://cloud.google.com/dataflow/docs",
      l: [
        ["de2-pubsub", "2.1", "Pub/Sub & Datastream CDC"],
        ["de2-dataflow", "2.2", "Dataflow & Apache Beam"],
        ["de2-dataproc", "2.3", "Dataproc & Serverless Spark"],
        ["de2-etl", "2.4", "Data Fusion, Dataform & DTS"]
      ],
      r: [
        ["de2-recap", "2.5", "Pipeline Engine Trade-offs", "r"],
        ["de2-lab", "", "Streaming Pipeline Drill", "q"]
      ]
    },
    {
      k: "de3", n: "Domain 3", t: "Storing the Data", w: "20%", c: "#fbbc04",
      doc: "https://cloud.google.com/bigquery/docs",
      l: [
        ["de3-bigquery", "3.1", "BigQuery Schema, Partitions & Clusters"],
        ["de3-gcs", "3.2", "Cloud Storage & BigLake Iceberg"],
        ["de3-databases", "3.3", "Bigtable, Spanner, Cloud SQL & AlloyDB"]
      ],
      r: [
        ["de3-cheatsheet", "3.4", "Storage Selection Cheat Sheet", "r"],
        ["de3-drills", "", "Row-Key & Schema Drills", "q"]
      ]
    },
    {
      k: "de4", n: "Domain 4", t: "Preparing Data for Analysis", w: "15%", c: "#ea4335",
      doc: "https://cloud.google.com/dataplex/docs",
      l: [
        ["de4-analytics", "4.1", "BigQuery Analytics, BI Engine & Looker"],
        ["de4-governance", "4.2", "Dataplex, Lineage & Policy Tags"],
        ["de4-ml", "4.3", "BigQuery ML & Vertex AI"]
      ],
      r: [
        ["deck:adk-bigquery-agents-slides", "", "Data Agents with ADK & BigQuery", "d"],
        ["de4-recap", "4.4", "Analytics & ML Decision Guide", "r"]
      ]
    },
    {
      k: "de5", n: "Domain 5", t: "Maintaining & Automating", w: "18%", c: "#a142f4",
      doc: "https://cloud.google.com/composer/docs",
      l: [
        ["de5-orchestration", "5.1", "Cloud Composer & Workflows"],
        ["de5-monitoring", "5.2", "Monitoring, Logging & Debugging"],
        ["de5-finops", "5.3", "FinOps, Slots & Data CI/CD"]
      ],
      r: [
        ["de5-takeaway", "5.4", "Ops & FinOps Master Takeaway", "r"],
        ["de5-exam", "", "Official Sample Questions", "q"]
      ]
    }
  ],
  data: {
    domains: {
      de1: [
        "<strong>Architect for requirements (1.1):</strong> Select the right combination of batch/streaming processing and analytical/operational storage based on latency, throughput, consistency, and SQL needs.",
        "<strong>Design for security and governance (1.2):</strong> Apply IAM least privilege, BigQuery Authorized Views/Row-Level Security, CMEK, VPC Service Controls, and Sensitive Data Protection (Cloud DLP).",
        "<strong>Plan HA, DR, and migrations (1.3):</strong> Choose multi-region resilience, schema evolution strategies, and migration tools (Storage Transfer Service, Transfer Appliance, DMS, Datastream)."
      ],
      de2: [
        "<strong>Ingest events and CDC reliably (2.1):</strong> Configure Pub/Sub topics, ordering keys, dead-letter topics, and direct BigQuery/GCS subscriptions; replicate OLTP databases with Datastream.",
        "<strong>Master Dataflow / Apache Beam (2.2):</strong> Design unified batch/streaming pipelines using windowing (Fixed, Sliding, Session), watermarks, triggers, allowed lateness, and Flex Templates.",
        "<strong>Run Spark & ELT cleanly (2.3 & 2.4):</strong> Use ephemeral Dataproc or Dataproc Serverless with GCS storage, Dataform SQLX for in-warehouse ELT, and Cloud Data Fusion for visual ETL."
      ],
      de3: [
        "<strong>Optimize BigQuery storage (3.1):</strong> Combine partitioning, clustering (up to 4 columns), nested/repeated fields (<code>STRUCT</code>/<code>ARRAY</code>), and logical vs. physical storage billing.",
        "<strong>Build a BigLake Lakehouse (3.2):</strong> Manage GCS storage classes & lifecycle policies and query open formats (Parquet, Apache Iceberg) with fine-grained governance via BigLake.",
        "<strong>Pick the right operational DB (3.3):</strong> Choose Cloud SQL/AlloyDB for relational OLTP, Cloud Spanner for global strong consistency, Cloud Bigtable for low-latency wide-column time-series/IoT, and Firestore/Memorystore."
      ],
      de4: [
        "<strong>Accelerate analytics & BI (4.1):</strong> Use BigQuery window functions, Materialized Views, BI Engine, and Looker semantic models.",
        "<strong>Govern enterprise data (4.2):</strong> Automate discovery, data quality checks, lineage, and column-level policy tags with Dataplex Universal Catalog and share via Analytics Hub.",
        "<strong>Operationalize ML & GenAI (4.3):</strong> Build SQL-native models in BigQuery ML, call Gemini via remote models, and orchestrate custom training/serving in Vertex AI."
      ],
      de5: [
        "<strong>Orchestrate dependencies (5.1):</strong> Author resilient Apache Airflow DAGs on Cloud Composer and lightweight API/event orchestration with Cloud Workflows, Eventarc, and Cloud Scheduler.",
        "<strong>Monitor and troubleshoot (5.2):</strong> Diagnose Dataflow stragglers/watermarks and BigQuery slot contention using Cloud Monitoring, Cloud Logging, and <code>INFORMATION_SCHEMA</code>.",
        "<strong>Optimize cost & automate delivery (5.3):</strong> Rightsize BigQuery Editions/slots, enforce dry-run/byte caps, and ship data pipelines via Terraform and Cloud Build CI/CD."
      ]
    },
    modules: {
      "de1-arch": {
        url: "https://cloud.google.com/architecture/reference-patterns/overview",
        goals: [
          "Map business requirements (latency, consistency, volume, schema flexibility) to Google Cloud data services.",
          "Compare Data Lake, Data Warehouse, and Lakehouse (BigLake + BigQuery) architectures."
        ],
        concepts: [
          {
            n: "Lambda vs. Kappa Architecture",
            tag: "Dual batch/stream vs. unified stream",
            what: "<strong>Lambda</strong> runs separate batch and speed layers; <strong>Kappa</strong> processes both historical replay and real-time events through one unified streaming engine (e.g. Apache Beam / Dataflow).",
            why: "Dataflow's unified programming model eliminates maintaining two separate codebases for batch and streaming."
          },
          {
            n: "Lakehouse on Google Cloud",
            tag: "GCS + BigLake + BigQuery + Spark",
            what: "Combines open file formats (Apache Iceberg, Parquet) in Cloud Storage with BigQuery's SQL engine and unified Dataplex governance.",
            why: "Avoids data silos and lets both BigQuery SQL and Dataproc Spark query the same governed tables without copying data."
          },
          {
            n: "OLTP vs. OLAP Separation",
            tag: "Transactional vs. Analytical",
            what: "<strong>OLTP</strong> (Cloud SQL, AlloyDB, Spanner) serves low-latency row updates; <strong>OLAP</strong> (BigQuery) scans terabytes/petabytes for aggregations.",
            why: "Running heavy analytical queries directly on OLTP databases degrades production latency—offload via Datastream CDC or federated queries."
          }
        ],
        resources: [
          { kind: "doc", label: "Google Cloud Data Analytics Architecture", url: "https://cloud.google.com/architecture/data-analytics" }
        ]
      },
      "de1-security": {
        url: "https://cloud.google.com/bigquery/docs/data-governance",
        goals: [
          "Protect sensitive PII data at rest, in transit, and at query time using Google Cloud security controls."
        ],
        concepts: [
          {
            n: "Authorized Views, Row & Column Security",
            tag: "Fine-grained BigQuery access",
            what: "<strong>Authorized Views/Datasets</strong> share query results without granting underlying table access; <strong>Row-Level Policies</strong> filter rows per user; <strong>Policy Tags</strong> restrict/mask PII columns.",
            why: "Frequently tested on the PDE exam for multi-tenant analytics and GDPR/HIPAA compliance."
          },
          {
            n: "Sensitive Data Protection (Cloud DLP)",
            tag: "Inspect · Redact · Tokenize",
            what: "Automatically detects and de-identifies PII (credit cards, SSNs, emails) using masking, bucketing, or Format-Preserving Encryption (FPE).",
            why: "Integrates directly with Dataflow and Cloud Storage to sanitize data before it lands in analytical warehouses."
          },
          {
            n: "CMEK & VPC Service Controls",
            tag: "Cloud KMS + Data Exfiltration Perimeter",
            what: "<strong>CMEK</strong> lets you control encryption keys in Cloud KMS; <strong>VPC-SC</strong> creates a security perimeter around BigQuery/GCS APIs.",
            why: "Prevents insiders or compromised credentials from exfiltrating BigQuery tables to external GCP projects."
          }
        ],
        resources: [
          { kind: "doc", label: "BigQuery Column-Level Security", url: "https://cloud.google.com/bigquery/docs/column-level-security-intro" },
          { kind: "doc", label: "Sensitive Data Protection Docs", url: "https://cloud.google.com/sensitive-data-protection/docs" }
        ]
      },
      "de1-migration": {
        url: "https://cloud.google.com/architecture/migration-to-google-cloud-transferring-your-large-datasets",
        goals: [
          "Select the fastest, lowest-downtime migration path for files, Hadoop clusters, and live databases."
        ],
        concepts: [
          {
            n: "Storage Transfer Service vs. Transfer Appliance",
            tag: "Online vs. Offline bulk transfer",
            what: "<strong>Storage Transfer Service</strong> moves data online from S3, Azure, HTTP, or on-prem; <strong>Transfer Appliance</strong> ships encrypted physical hardware for 100s of TB / PB over slow WAN links.",
            why: "Always calculate network transfer time: if a 100 Mbps link takes months to upload 500 TB, choose Transfer Appliance."
          },
          {
            n: "Database Migration Service (DMS) & Datastream",
            tag: "Minimal-downtime DB migration & CDC",
            what: "<strong>DMS</strong> migrates MySQL/PostgreSQL/Oracle to Cloud SQL/AlloyDB; <strong>Datastream</strong> streams real-time Change Data Capture (CDC) into BigQuery or GCS.",
            why: "Enables near-zero-downtime cutovers and real-time operational analytics."
          }
        ],
        resources: [
          { kind: "doc", label: "Transferring Large Datasets", url: "https://cloud.google.com/architecture/migration-to-google-cloud-transferring-your-large-datasets" }
        ]
      },
      "de1-matrix": {
        url: "https://cloud.google.com/learn/certification/guides/data-engineer",
        goals: [
          "Quickly match exam scenario keywords to the canonical Google Cloud data service."
        ],
        concepts: [
          {
            n: "Exam Keyword → Service Shortcuts",
            tag: "High-yield pattern matching",
            what: "Petabyte SQL analytics → <strong>BigQuery</strong>; Global strong-consistency SQL → <strong>Spanner</strong>; Sub-10ms IoT/time-series → <strong>Bigtable</strong>; Lift-and-shift Spark/Hadoop → <strong>Dataproc</strong>; Serverless unified stream/batch → <strong>Dataflow</strong>.",
            why: "Eliminating wrong distractors quickly gives you extra time for multi-step architecture questions."
          }
        ],
        resources: [
          { kind: "doc", label: "Official PDE Exam Guide", url: "https://cloud.google.com/learn/certification/guides/data-engineer" }
        ]
      },
      "de1-practice": {
        url: "https://cloud.google.com/learn/certification/data-engineer",
        goals: [
          "Validate your Domain 1 architecture judgment against official Google Cloud scenarios."
        ],
        concepts: [
          {
            n: "Domain 1 Scenario Checklist",
            tag: "Cost + Latency + Governance",
            what: "For every architecture question, check: 1) Does it require managed/serverless? 2) Is data structured or unstructured? 3) Are there strict compliance/residency constraints?",
            why: "Google Cloud exam questions almost always include one hidden constraint (like CMEK, global consistency, or minimum ops) that determines the single best answer."
          }
        ],
        resources: [
          { kind: "quiz", label: "Official PDE Sample Questions", url: "https://cloud.google.com/learn/certification/data-engineer" }
        ]
      },
      "de2-pubsub": {
        url: "https://cloud.google.com/pubsub/docs/overview",
        goals: [
          "Design decoupled, reliable event ingestion using Pub/Sub and serverless CDC with Datastream."
        ],
        concepts: [
          {
            n: "Pub/Sub Delivery, Ordering & Dead-Letter",
            tag: "At-least-once · Exactly-once · Ordering Key",
            what: "Global asynchronous messaging bus with push/pull subscriptions, optional <strong>Ordering Keys</strong>, <strong>Exactly-Once Delivery</strong>, and <strong>Dead-Letter Topics</strong>.",
            why: "Decouples producers from consumers and buffers massive traffic spikes without losing events."
          },
          {
            n: "Direct BigQuery & GCS Subscriptions",
            tag: "Zero-code ingestion",
            what: "Pub/Sub can write messages directly into BigQuery tables or Cloud Storage buckets without running a Dataflow job.",
            why: "When no complex transformation or windowing is needed, direct subscriptions cut compute cost and operational overhead to zero."
          },
          {
            n: "Datastream (Serverless CDC)",
            tag: "MySQL / Postgres / Oracle / SQL Server → BQ",
            what: "Captures inserts, updates, and deletes directly from database transaction logs and streams them into BigQuery or GCS.",
            why: "Replaces brittle nightly full-table dumps with low-latency, schema-aware replication."
          }
        ],
        resources: [
          { kind: "doc", label: "Pub/Sub BigQuery Subscriptions", url: "https://cloud.google.com/pubsub/docs/bigquery" },
          { kind: "doc", label: "Datastream Overview", url: "https://cloud.google.com/datastream/docs/overview" }
        ]
      },
      "de2-dataflow": {
        url: "https://cloud.google.com/dataflow/docs/concepts/streaming-pipelines",
        goals: [
          "Master Apache Beam windowing, watermarks, triggers, allowed lateness, and Dataflow scaling features."
        ],
        concepts: [
          {
            n: "Windowing: Fixed, Sliding & Session",
            tag: "Grouping unbounded streams",
            what: "<strong>Fixed</strong> (non-overlapping tumbling), <strong>Sliding</strong> (overlapping moving averages), and <strong>Session</strong> (per-key activity bursts separated by a gap duration).",
            why: "Core exam topic: Session windows model user clickstreams; Sliding windows model rolling alerts (e.g. 5-min avg updated every 1 min)."
          },
          {
            n: "Watermarks, Triggers & Allowed Lateness",
            tag: "Event time vs. Processing time",
            what: "<strong>Watermark</strong> estimates when all events for a window have arrived; <strong>Triggers</strong> control when panes emit; <strong>Allowed Lateness</strong> accepts late-arriving mobile/IoT events past the watermark.",
            why: "Balances low-latency early results against completeness when devices go offline and sync late."
          },
          {
            n: "Streaming Engine, Shuffle & Flex Templates",
            tag: "Production Dataflow ops",
            what: "<strong>Streaming Engine</strong> / <strong>Dataflow Shuffle</strong> offload state and shuffle from worker VMs to the Dataflow service; <strong>Flex Templates</strong> package pipelines as Docker images.",
            why: "Enables faster autoscaling, smaller worker disks, and parameterized CI/CD deployments."
          },
          {
            n: "Side Inputs & Dead-Letter Pattern",
            tag: "Enrichment + error routing",
            what: "<strong>Side Inputs</strong> broadcast small lookup tables to workers; <strong>TupleTag</strong> multi-outputs route malformed records to a dead-letter GCS/BQ table.",
            why: "Prevents a single bad JSON record from crashing an entire streaming pipeline."
          }
        ],
        resources: [
          { kind: "doc", label: "Dataflow Streaming Concepts", url: "https://cloud.google.com/dataflow/docs/concepts/streaming-pipelines" },
          { kind: "doc", label: "Dataflow Flex Templates", url: "https://cloud.google.com/dataflow/docs/guides/templates/using-flex-templates" }
        ]
      },
      "de2-dataproc": {
        url: "https://cloud.google.com/dataproc/docs/concepts/overview",
        goals: [
          "Modernize Hadoop/Spark workloads using ephemeral clusters, GCS storage separation, and Dataproc Serverless."
        ],
        concepts: [
          {
            n: "Ephemeral Clusters + GCS Connector",
            tag: "Decouple compute from HDFS",
            what: "Store data in Cloud Storage (<code>gs://</code>) instead of HDFS, spin up a Dataproc cluster for the job, and delete it immediately after.",
            why: "Eliminates paying for idle clusters and protects data if worker VMs are deleted or preempted."
          },
          {
            n: "Preemptible / Spot Secondary Workers",
            tag: "Cost-optimized Spark compute",
            what: "Add cheap Spot VMs as secondary workers (which do not store HDFS blocks) alongside standard primary workers.",
            why: "Slashes batch Spark compute costs by up to 60–80% while keeping HDFS metadata safe on primary nodes."
          },
          {
            n: "Dataproc Serverless for Spark",
            tag: "No cluster management",
            what: "Runs PySpark/Spark SQL batch workloads and interactive sessions without provisioning or tuning clusters.",
            why: "Best choice when migrating Spark code to GCP with minimal infrastructure operations."
          }
        ],
        resources: [
          { kind: "doc", label: "Dataproc Best Practices", url: "https://cloud.google.com/dataproc/docs/guides/dataproc-best-practices" },
          { kind: "doc", label: "Dataproc Serverless", url: "https://cloud.google.com/dataproc-serverless/docs/overview" }
        ]
      },
      "de2-etl": {
        url: "https://cloud.google.com/dataform/docs/overview",
        goals: [
          "Choose between visual ETL (Cloud Data Fusion), SQL ELT (Dataform), and managed ingestion (BigQuery DTS)."
        ],
        concepts: [
          {
            n: "Dataform (SQLX ELT in BigQuery)",
            tag: "Git-versioned SQL DAGs + Assertions",
            what: "Manages SQL transformation dependencies, incremental tables, documentation, and data quality assertions directly inside BigQuery.",
            why: "Preferred Google Cloud ELT pattern when data is already landed in BigQuery and transformations are SQL-based."
          },
          {
            n: "Cloud Data Fusion",
            tag: "No-code visual ETL (CDAP)",
            what: "Managed graphical ETL service with Wrangler for visual data prep and pre-built connectors for SAP, Salesforce, and databases.",
            why: "Ideal when citizen integrators or enterprise teams need drag-and-drop pipelines without writing Beam/Spark code."
          },
          {
            n: "BigQuery Data Transfer Service (DTS)",
            tag: "Scheduled SaaS & S3/GCS loads",
            what: "Automates recurring data loads from Google Ads, YouTube, Analytics, Amazon S3, Redshift, and Cloud Storage into BigQuery.",
            why: "Zero-code managed ingestion for standard marketing and cloud storage sources."
          }
        ],
        resources: [
          { kind: "doc", label: "Dataform Overview", url: "https://cloud.google.com/dataform/docs/overview" },
          { kind: "doc", label: "Cloud Data Fusion Docs", url: "https://cloud.google.com/data-fusion/docs" }
        ]
      },
      "de2-recap": {
        url: "https://cloud.google.com/dataflow/docs",
        goals: [
          "Contrast Dataflow, Dataproc, Data Fusion, and Dataform cleanly."
        ],
        concepts: [
          {
            n: "Choosing the Right Processing Engine",
            tag: "4-way decision rule",
            what: "Greenfield stream/batch in Python/Java → <strong>Dataflow</strong>; Existing Spark/Hadoop/Hive → <strong>Dataproc / Serverless Spark</strong>; Visual no-code ETL → <strong>Data Fusion</strong>; SQL-only ELT inside BigQuery → <strong>Dataform</strong>.",
            why: "This single distinction resolves a large share of Domain 2 exam questions."
          }
        ],
        resources: [
          { kind: "doc", label: "Choose a Data Processing Option", url: "https://cloud.google.com/architecture/data-analytics" }
        ]
      },
      "de2-lab": {
        url: "https://cloud.google.com/dataflow/docs/quickstarts",
        goals: [
          "Practice building a Pub/Sub → Dataflow → BigQuery streaming pipeline using the Storage Write API."
        ],
        concepts: [
          {
            n: "BigQuery Storage Write API",
            tag: "Exactly-once high-throughput streaming",
            what: "Modern gRPC-based streaming ingestion API replacing legacy <code>insertAll</code>.",
            why: "Offers lower cost, higher throughput, schema updates, and exactly-once semantics from Dataflow."
          }
        ],
        resources: [
          { kind: "doc", label: "BigQuery Storage Write API", url: "https://cloud.google.com/bigquery/docs/write-api" }
        ]
      },
      "de3-bigquery": {
        url: "https://cloud.google.com/bigquery/docs/partitioned-tables",
        goals: [
          "Design high-performance, low-cost BigQuery tables using partitioning, clustering, and denormalization."
        ],
        concepts: [
          {
            n: "Partitioning (Time, Ingestion, Integer Range)",
            tag: "Coarse-grained pruning",
            what: "Divides a table into segments (e.g. daily by <code>event_date</code>) and supports <code>require_partition_filter = true</code> and partition expiration.",
            why: "Pruning partitions slashes bytes scanned and gives accurate cost estimates before running queries."
          },
          {
            n: "Clustering (Up to 4 Columns)",
            tag: "Co-located sorted blocks",
            what: "Automatically sorts data inside each partition by up to 4 specified columns (most selective filter column first).",
            why: "Ideal for high-cardinality filters (<code>customer_id</code>, <code>region</code>) and queries that aggregate or filter on multiple columns."
          },
          {
            n: "Denormalization with STRUCT & ARRAY",
            tag: "Nested & repeated fields",
            what: "Stores 1-to-many child records (like order line items) directly inside parent rows as <code>ARRAY&lt;STRUCT&lt;...&gt;&gt;</code>.",
            why: "Eliminates expensive distributed shuffles/JOINs while preserving relational structure in columnar storage."
          },
          {
            n: "Logical vs. Physical Storage Billing",
            tag: "Compression economics",
            what: "Logical bills uncompressed bytes; Physical bills compressed bytes on disk (including Time Travel and Fail-safe storage).",
            why: "Datasets with high compression ratios (e.g. 4:1+) and low churn save significantly under Physical storage billing."
          }
        ],
        resources: [
          { kind: "doc", label: "Partitioned & Clustered Tables", url: "https://cloud.google.com/bigquery/docs/clustered-tables" },
          { kind: "doc", label: "Nested and Repeated Columns", url: "https://cloud.google.com/bigquery/docs/nested-repeated" }
        ]
      },
      "de3-gcs": {
        url: "https://cloud.google.com/bigquery/docs/biglake-intro",
        goals: [
          "Optimize Cloud Storage costs and unify object storage with BigLake and Apache Iceberg."
        ],
        concepts: [
          {
            n: "GCS Storage Classes & Autoclass",
            tag: "Standard · Nearline · Coldline · Archive",
            what: "Matches storage cost to access frequency (30 / 90 / 365-day minimum durations) or automates transitions with <strong>Autoclass</strong> and Object Lifecycle rules.",
            why: "Drastically lowers raw data-lake storage bills for historical logs and compliance archives."
          },
          {
            n: "BigLake Tables & Apache Iceberg",
            tag: "Unified lakehouse governance",
            what: "Storage engine that lets BigQuery and Spark query Parquet/ORC/Avro/Iceberg files in GCS (or S3/Azure via BigQuery Omni) with row/column-level security.",
            why: "Gives you open-format portability without sacrificing BigQuery's fine-grained security and caching."
          }
        ],
        resources: [
          { kind: "doc", label: "BigLake Overview", url: "https://cloud.google.com/bigquery/docs/biglake-intro" },
          { kind: "doc", label: "Cloud Storage Classes", url: "https://cloud.google.com/storage/docs/storage-classes" }
        ]
      },
      "de3-databases": {
        url: "https://cloud.google.com/architecture/database-selection-guide",
        goals: [
          "Design schemas and select between Cloud SQL, AlloyDB, Spanner, Bigtable, Firestore, and Memorystore."
        ],
        concepts: [
          {
            n: "Cloud Bigtable Row-Key Design",
            tag: "Avoid hotspotting · Tall & narrow",
            what: "Wide-column NoSQL store for petabyte-scale, sub-10ms reads/writes. Never start row keys with monotonically increasing timestamps or sequential IDs.",
            why: "Starting keys with a reversed/composite prefix like <code>deviceId#reverseTimestamp</code> spreads writes evenly across tablet nodes."
          },
          {
            n: "Cloud Spanner",
            tag: "Global horizontal scale + ACID SQL",
            what: "Globally distributed relational database with external consistency (TrueTime) and <strong>Interleaved Tables</strong> to co-locate parent/child rows.",
            why: "The go-to choice when you need unlimited horizontal write scale AND strict relational ACID transactions across regions."
          },
          {
            n: "Cloud SQL vs. AlloyDB",
            tag: "Managed RDBMS vs. Enterprise Postgres",
            what: "<strong>Cloud SQL</strong> manages MySQL/PostgreSQL/SQL Server; <strong>AlloyDB</strong> is a PostgreSQL-compatible cloud-native database with a decoupled storage layer and columnar engine for HTAP.",
            why: "Pick Cloud SQL for standard regional OLTP (&lt;64 TB) and AlloyDB for demanding PostgreSQL workloads needing fast mixed OLTP+analytics."
          },
          {
            n: "Firestore & Memorystore",
            tag: "Document DB & In-memory Redis/Valkey",
            what: "<strong>Firestore</strong> handles serverless mobile/web document sync; <strong>Memorystore</strong> provides sub-millisecond caching and session state.",
            why: "Round out operational architectures for real-time apps and low-latency feature serving."
          }
        ],
        resources: [
          { kind: "doc", label: "Bigtable Schema Design Best Practices", url: "https://cloud.google.com/bigtable/docs/schema-design" },
          { kind: "doc", label: "Cloud Spanner Schema & Data Model", url: "https://cloud.google.com/spanner/docs/schema-and-data-model" }
        ]
      },
      "de3-cheatsheet": {
        url: "https://cloud.google.com/architecture/database-selection-guide",
        goals: [
          "Keep a crisp mental map of every Google Cloud storage service."
        ],
        concepts: [
          {
            n: "One-Line Storage Selector",
            tag: "7 services at a glance",
            what: "<strong>GCS</strong>: blobs/lake · <strong>BigQuery</strong>: petabyte OLAP · <strong>Bigtable</strong>: high-throughput IoT/time-series · <strong>Spanner</strong>: global ACID SQL · <strong>Cloud SQL / AlloyDB</strong>: regional OLTP · <strong>Firestore</strong>: serverless docs · <strong>Memorystore</strong>: sub-ms cache.",
            why: "Covers 100% of storage selection questions on the PDE exam."
          }
        ],
        resources: [
          { kind: "doc", label: "Google Cloud Databases Overview", url: "https://cloud.google.com/products/databases" }
        ]
      },
      "de3-drills": {
        url: "https://cloud.google.com/bigtable/docs/schema-design",
        goals: [
          "Practice spotting Bigtable hotspotting keys and suboptimal BigQuery query patterns."
        ],
        concepts: [
          {
            n: "Hotspotting & Full-Scan Traps",
            tag: "Common exam traps",
            what: "Watch out for: <code>SELECT *</code> on wide BigQuery tables, <code>LIMIT</code> (does NOT reduce bytes billed!), and Bigtable keys starting with <code>YYYYMMDD</code> or domain names.",
            why: "These exact traps show up repeatedly in PDE exam questions."
          }
        ],
        resources: [
          { kind: "doc", label: "BigQuery Query Optimization", url: "https://cloud.google.com/bigquery/docs/best-practices-performance-overview" }
        ]
      },
      "de4-analytics": {
        url: "https://cloud.google.com/bigquery/docs/bi-engine-intro",
        goals: [
          "Accelerate dashboards and complex analytical SQL with Materialized Views, BI Engine, and Looker."
        ],
        concepts: [
          {
            n: "Materialized Views & Smart Tuning",
            tag: "Auto-refreshed pre-aggregations",
            what: "Precomputed SQL aggregations that BigQuery automatically refreshes and uses transparently via Smart Tuning even when queries reference the base table.",
            why: "Cuts dashboard latency and repeated compute cost with zero manual cache invalidation."
          },
          {
            n: "BigQuery BI Engine & Looker",
            tag: "Sub-second BI + LookML semantic layer",
            what: "<strong>BI Engine</strong> is an in-memory analysis layer for BigQuery; <strong>Looker</strong> defines governed metrics once in LookML.",
            why: "Delivers sub-second interactive dashboards while ensuring every team calculates KPIs identically."
          },
          {
            n: "Approximate Aggregation & Window Functions",
            tag: "APPROX_COUNT_DISTINCT · OVER()",
            what: "HyperLogLog++ approximate functions (<code>APPROX_COUNT_DISTINCT</code>) trade <1% accuracy for huge memory/slot savings; Window functions compute rankings and rolling sums without collapsing rows.",
            why: "Prevents BigQuery 'Resources Exceeded' errors on massive cardinality counts."
          }
        ],
        resources: [
          { kind: "doc", label: "BigQuery Materialized Views", url: "https://cloud.google.com/bigquery/docs/materialized-views-intro" },
          { kind: "doc", label: "BigQuery BI Engine", url: "https://cloud.google.com/bigquery/docs/bi-engine-intro" }
        ]
      },
      "de4-governance": {
        url: "https://cloud.google.com/dataplex/docs/introduction",
        goals: [
          "Implement enterprise data discovery, automated quality checks, lineage, and data sharing with Dataplex."
        ],
        concepts: [
          {
            n: "Dataplex Universal Catalog & Auto Data Quality",
            tag: "Metadata · Profiling · DQ Rules",
            what: "Centralized catalog across BigQuery and GCS with automated data profiling, declarative data quality scans, and business glossaries.",
            why: "Detects null spikes, schema drift, and broken upstream feeds before bad data reaches executive dashboards."
          },
          {
            n: "Data Lineage & Analytics Hub",
            tag: "End-to-end provenance + Zero-copy sharing",
            what: "<strong>Data Lineage</strong> automatically graphs table-to-table movement across BigQuery, Dataflow, and Composer; <strong>Analytics Hub</strong> shares datasets across orgs without copying bytes.",
            why: "Answers 'where did this number come from?' during audits and enables secure data exchanges."
          }
        ],
        resources: [
          { kind: "doc", label: "Dataplex Overview", url: "https://cloud.google.com/dataplex/docs/introduction" },
          { kind: "doc", label: "Analytics Hub Overview", url: "https://cloud.google.com/bigquery/docs/analytics-hub-introduction" }
        ]
      },
      "de4-ml": {
        url: "https://cloud.google.com/bigquery/docs/bqml-introduction",
        goals: [
          "Train and serve ML models in SQL with BigQuery ML, invoke Gemini remote models, and integrate with Vertex AI."
        ],
        concepts: [
          {
            n: "BigQuery ML (BQML)",
            tag: "CREATE MODEL · ML.EVALUATE · ML.PREDICT",
            what: "Trains regression, classification, clustering, ARIMA_PLUS forecasting, and matrix factorization models directly inside BigQuery using SQL.",
            why: "Eliminates moving terabytes of data out of BigQuery and lets SQL analysts ship production ML models rapidly."
          },
          {
            n: "BigQuery GenAI & Vector Search",
            tag: "ML.GENERATE_TEXT · VECTOR_SEARCH",
            what: "Calls Vertex AI Gemini models via remote connections and runs IVF/TreeAH vector similarity search directly over BigQuery tables.",
            why: "Enables enterprise RAG, semantic classification, and multimodal analytics right where the data already lives."
          },
          {
            n: "Vertex AI Feature Store & Pipelines",
            tag: "Online/offline parity + MLOps",
            what: "Serves low-latency features to online ML endpoints while keeping training/serving parity, orchestrated via Kubeflow/Vertex AI Pipelines.",
            why: "Prevents training-serving skew when moving from SQL prototypes to custom deep learning models."
          }
        ],
        resources: [
          { kind: "doc", label: "BigQuery ML Introduction", url: "https://cloud.google.com/bigquery/docs/bqml-introduction" },
          { kind: "doc", label: "Vertex AI Documentation", url: "https://cloud.google.com/vertex-ai/docs" }
        ]
      },
      "de4-recap": {
        url: "https://cloud.google.com/bigquery/docs/bqml-introduction",
        goals: [
          "Decide cleanly between Pre-trained AI APIs, BigQuery ML, AutoML, and Custom Vertex AI Training."
        ],
        concepts: [
          {
            n: "ML Build vs. Buy Ladder",
            tag: "Pre-trained → BQML → AutoML → Custom",
            what: "Standard vision/speech/NLP → <strong>Pre-trained APIs / Gemini</strong>; Tabular data already in BQ + SQL team → <strong>BQML</strong>; Custom tabular/image with no ML code → <strong>AutoML</strong>; Custom PyTorch/TF architecture → <strong>Vertex AI Custom Training</strong>.",
            why: "Always pick the simplest option that satisfies the exam prompt's constraints."
          }
        ],
        resources: [
          { kind: "doc", label: "Choose a Vertex AI Training Method", url: "https://cloud.google.com/vertex-ai/docs/start/training-methods" }
        ]
      },
      "de5-orchestration": {
        url: "https://cloud.google.com/composer/docs/concepts/overview",
        goals: [
          "Orchestrate complex data DAGs with Cloud Composer and lightweight event flows with Cloud Workflows."
        ],
        concepts: [
          {
            n: "Cloud Composer (Managed Apache Airflow)",
            tag: "Python DAGs · Operators · Sensors",
            what: "Managed Airflow service for scheduling and monitoring complex multi-step data dependencies across BigQuery, Dataflow, Dataproc, and external APIs.",
            why: "Best for complex dependency graphs, backfills, retries, and Python-defined data workflows. Composer 3 removes VPC/networking setup friction."
          },
          {
            n: "Cloud Workflows vs. Eventarc vs. Scheduler",
            tag: "Serverless lightweight orchestration",
            what: "<strong>Cloud Scheduler</strong> triggers cron jobs; <strong>Eventarc</strong> reacts to GCS/Pub/Sub events; <strong>Cloud Workflows</strong> chains HTTP/GCP API calls in YAML with zero idle cost.",
            why: "Don't spin up a full Cloud Composer environment just to run a single daily SQL query or GCS-triggered Cloud Run job!"
          }
        ],
        resources: [
          { kind: "doc", label: "Cloud Composer Overview", url: "https://cloud.google.com/composer/docs/concepts/overview" },
          { kind: "doc", label: "Cloud Workflows Overview", url: "https://cloud.google.com/workflows/docs/overview" }
        ]
      },
      "de5-monitoring": {
        url: "https://cloud.google.com/bigquery/docs/information-schema-jobs",
        goals: [
          "Troubleshoot slow queries, Dataflow lag, and pipeline failures using native telemetry."
        ],
        concepts: [
          {
            n: "BigQuery INFORMATION_SCHEMA",
            tag: "JOBS · JOBS_BY_PROJECT · TABLE_STORAGE",
            what: "SQL views exposing query slot-ms, bytes billed, stage execution plans, and storage footprint.",
            why: "Pinpoints expensive queries, slot contention, and data skew without third-party tools."
          },
          {
            n: "Dataflow Diagnostics (Watermark & Stragglers)",
            tag: "System Lag · Data Freshness · Hot Keys",
            what: "<strong>Data Watermark Lag</strong> shows backlog; <strong>Stragglers</strong> indicate skewed keys in <code>GroupByKey</code> (fix with <code>Combine.perKey</code> or fan-out).",
            why: "Key troubleshooting pattern for streaming pipelines falling behind SLAs."
          },
          {
            n: "Cloud Monitoring, Logging & Audit Logs",
            tag: "SLOs · Alerts · Log-based metrics",
            what: "Centralized dashboards, alerting policies on Pub/Sub oldest unacked message age, and Data Access Audit Logs for compliance.",
            why: "Catches silent pipeline stalls and unauthorized data queries in real time."
          }
        ],
        resources: [
          { kind: "doc", label: "BigQuery INFORMATION_SCHEMA.JOBS", url: "https://cloud.google.com/bigquery/docs/information-schema-jobs" },
          { kind: "doc", label: "Troubleshoot Dataflow Pipelines", url: "https://cloud.google.com/dataflow/docs/guides/troubleshooting-your-pipeline" }
        ]
      },
      "de5-finops": {
        url: "https://cloud.google.com/bigquery/docs/editions-intro",
        goals: [
          "Control data platform spend and automate infrastructure & pipeline deployments."
        ],
        concepts: [
          {
            n: "BigQuery On-Demand vs. Editions (Slots)",
            tag: "Per-TiB scanned vs. Autoscaling Reservations",
            what: "<strong>On-Demand</strong> bills per TiB scanned (great for sporadic workloads); <strong>Editions</strong> (Standard, Enterprise, Enterprise Plus) bill autoscaling slot capacity with optional commitments.",
            why: "Predictable high-volume workloads save significantly with slot reservations and idle slot sharing."
          },
          {
            n: "Cost Guardrails (Dry Run & Max Bytes Billed)",
            tag: "maximum_bytes_billed + Custom Quotas",
            what: "Use dry runs to preview bytes scanned, set <code>maximum_bytes_billed</code> per query, and enforce project/user daily byte quotas.",
            why: "Stops a single accidental unpartitioned cross-join from generating a surprise bill."
          },
          {
            n: "DataOps CI/CD (Terraform + Cloud Build)",
            tag: "Automated testing & promotion",
            what: "Provision datasets/buckets via Terraform, run unit/data-quality tests in Cloud Build, and deploy Airflow DAGs, Dataform releases, and Dataflow Flex Templates across dev/staging/prod.",
            why: "Eliminates manual console clicks and ensures reproducible, audited pipeline changes."
          }
        ],
        resources: [
          { kind: "doc", label: "BigQuery Editions & Reservations", url: "https://cloud.google.com/bigquery/docs/editions-intro" },
          { kind: "doc", label: "BigQuery Cost Control Best Practices", url: "https://cloud.google.com/bigquery/docs/best-practices-costs" }
        ]
      },
      "de5-takeaway": {
        url: "https://cloud.google.com/bigquery/docs/best-practices-costs",
        goals: [
          "Review the highest-yield operational and cost-optimization rules before exam day."
        ],
        concepts: [
          {
            n: "Ops & FinOps Golden Rules",
            tag: "Quick exam checklist",
            what: "1) Use <strong>Storage Write API</strong> over legacy streaming, 2) Use <strong>Ephemeral Dataproc + GCS + Spot workers</strong>, 3) Fix Dataflow hot keys with <strong>Combine</strong>, 4) Partition + cluster BigQuery & avoid <code>SELECT *</code>, 5) Use <strong>Workflows</strong> for simple jobs and <strong>Composer</strong> for complex DAGs.",
            why: "Summarizes the core operational principles tested across Domains 2, 3, and 5."
          }
        ],
        resources: [
          { kind: "doc", label: "Google Cloud Architecture Framework: Cost Optimization", url: "https://cloud.google.com/architecture/framework/cost-optimization" }
        ]
      },
      "de5-exam": {
        url: "https://cloud.google.com/learn/certification/data-engineer",
        goals: [
          "Test your readiness with Google Cloud's official Professional Data Engineer sample questions."
        ],
        concepts: [
          {
            n: "Exam Day Strategy (50–60 Qs · 120 mins)",
            tag: "Time & elimination tactics",
            what: "Identify the single decisive constraint in each stem (e.g. 'minimum ops', 'sub-10ms', 'global consistency', 'lowest cost', 'PII redaction'), eliminate non-matching services first, and flag tough questions for review.",
            why: "Keeps pacing steady at ~2 minutes per question with time left to double-check flagged items."
          }
        ],
        resources: [
          { kind: "quiz", label: "Official PDE Certification Page & Sample Questions", url: "https://cloud.google.com/learn/certification/data-engineer" },
          { kind: "doc", label: "Google Cloud Skills Boost · Data Engineer Path", url: "https://www.cloudskillsboost.google/paths/16" }
        ]
      }
    }
  }
};
