fn main() {
    tauri_build::try_build(tauri_build::Attributes::new().app_manifest(
        tauri_build::AppManifest::new().commands(&[
            "core_open", "core_request", "core_read_events", "core_close"
        ])
    )).expect("narrow bridge ACL generation failed");
}
