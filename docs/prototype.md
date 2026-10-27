# Abrams Intelligence: first working prototype

October 27, 2026.

Abrams Intelligence has its first small local prototype: a browser app with saved chat, document and image attachments, and Qwen3.5 model support. Qwen3.5 4B is the initial available model. The downloaded 9B build is unavailable on the tested host configuration because it left insufficient free-memory headroom. This early implementation sits alongside the broader system's continuing development.

The source includes a React/TypeScript interface, local Node backend, SQLite conversations, bounded attachment parsing, a local Ollama adapter, launch scripts, and an optional official ChatGPT-plan adapter. Local mode is independent of cloud access. ChatGPT availability is conditional on official sign-in and successful account inference; there is no separately billed API fallback.

The application includes streamed answers, Stop, Retry, Copy, chat rename/delete/export, visible provider selection, and confirmation before sending conversation content to a cloud model. Its initial scope excludes browsing, autonomous actions, computer control, voice, and cross-conversation memory.

The production build and 33 automated tests passed; the production dependency audit reported zero vulnerabilities at this check. The actual browser workflow passed a real 4B conversation, saved-chat reload, a TXT attachment with the expected document answer, JSON export with extracted source text, and a persisted Stop state. Desktop and mobile checks reported no browser page errors or horizontal overflow. A fully internet-disconnected session remains unverified; these checks are not a complete security or quality assessment.

## Local inference observed

Both downloaded Q4 builds returned the expected answers on short text, document, and image fixtures. The 4B cold text request reached its first token in 8.071 seconds and generated at 10.16 tokens per second; the document fixture generated at 9.80 tokens per second and the image fixture at 15.43 tokens per second. Its peak measured memory was 3.52 GiB with 1,569 MiB minimum free host memory. Cancellation was observed at 9 ms.

The 9B cold text request reached its first token in 13.058 seconds and generated at 6.36 tokens per second. It answered the fixtures correctly but reached 6.56 GiB measured peak memory and only 54 MiB free host memory. It is therefore marked unavailable rather than presented as ready. These observations describe this PC and these bounded fixtures, not a comprehensive model-quality benchmark or a universal hardware requirement.

The ChatGPT adapter's nine fixture tests and a real Windows credential-protection smoke check passed. Live ChatGPT account access remains unverified until the user completes official sign-in and a response succeeds. No existing ChatGPT history or memory is imported, and no API-key billing fallback is present.

This update does not claim completion of the broader Abrams milestones. Remaining checks and later capabilities will be reported only after they are observed.
