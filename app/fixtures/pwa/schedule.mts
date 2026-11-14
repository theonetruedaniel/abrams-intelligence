// Trusted fixture owner input only. Matches the existing Tauri owner-entry H
// session, approvals and one output per run. Never imported by consumer code.
export const schedule=Object.freeze({
 testOnly:true as const,sessionId:'synthetic-rust-node-pipe',
 fixtureConfiguration:Object.freeze({version:1,H:Object.freeze({outputs:Object.freeze(['pipe-output'])})}),
 approvals:Object.freeze(['A','B'].map(runId=>Object.freeze({approvalId:'approval_'+runId,revision:1,runId,fixtureId:'H',epoch:1})))
});
