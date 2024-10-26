// ROLLUP_NO_REPLACE 
 const _1__cart = "{\"parsed\":{\"_path\":\"/blogs/cart\",\"_dir\":\"blogs\",\"_draft\":false,\"_partial\":false,\"_locale\":\"\",\"title\":\"Game Loop in Rust & Wasm\",\"description\":null,\"date\":\"20th Oct 2024\",\"image\":\"/blogs-img/20241013.png\",\"alt\":\"You can't make a game without a game loop.\",\"ogImage\":\"/blogs-img/blog4.jpg\",\"tags\":[\"rust\",\"wasm\",\"webassembly\"],\"published\":true,\"body\":{\"type\":\"root\",\"children\":[{\"type\":\"element\",\"tag\":\"p\",\"props\":{},\"children\":[{\"type\":\"text\",\"value\":\"I find understandig the game loop really engoyable.\"}]},{\"type\":\"element\",\"tag\":\"h3\",\"props\":{\"id\":\"introduction\"},\"children\":[{\"type\":\"text\",\"value\":\"Introduction\"}]},{\"type\":\"element\",\"tag\":\"p\",\"props\":{},\"children\":[{\"type\":\"text\",\"value\":\"In the programming I usually do, a game loop is not necessary.\\nHowever, it is necessary when programing games.\"}]},{\"type\":\"element\",\"tag\":\"p\",\"props\":{},\"children\":[{\"type\":\"text\",\"value\":\"I'm going to share some insights from my experience implementing a game loop with Rust and WASM.\"}]},{\"type\":\"element\",\"tag\":\"p\",\"props\":{},\"children\":[{\"type\":\"element\",\"tag\":\"a\",\"props\":{\"href\":\"https://github.com/myurioka/cart\",\"rel\":[\"nofollow\"]},\"children\":[{\"type\":\"text\",\"value\":\"cart / Programing Retro Game in Rust & Wasm in Github\"}]}]},{\"type\":\"element\",\"tag\":\"p\",\"props\":{},\"children\":[{\"type\":\"text\",\"value\":\"Here are the websites I referred to when coding the game loop.\"}]},{\"type\":\"element\",\"tag\":\"p\",\"props\":{},\"children\":[{\"type\":\"element\",\"tag\":\"a\",\"props\":{\"href\":\"https://github.com/PacktPublishing/Game-Development-with-Rust-and-WebAssembly\",\"rel\":[\"nofollow\"]},\"children\":[{\"type\":\"text\",\"value\":\"Game-Development-with-Rust-and-WebAssembly\"}]}]},{\"type\":\"element\",\"tag\":\"h3\",\"props\":{\"id\":\"what-i-enjoyed-most-about-programing-a-game-loop\"},\"children\":[{\"type\":\"text\",\"value\":\"What I enjoyed most about programing a game loop\"}]},{\"type\":\"element\",\"tag\":\"ul\",\"props\":{},\"children\":[{\"type\":\"element\",\"tag\":\"li\",\"props\":{},\"children\":[{\"type\":\"text\",\"value\":\"The code has implemented a sophisticated technique to synchronize rendering with the browser's actual frame rate.\"}]}]},{\"type\":\"element\",\"tag\":\"pre\",\"props\":{\"className\":\"language-js shiki shiki-themes dracula\",\"code\":\"const FRAME_SIZE: f64 = 1.0 / 60.0 * 1000.0;\\n\\nwhile game_loop.accumulated_delta > FRAME_SIZE {\\n    game.update(&keystate);\\n    game_loop.accumulated_delta -= FRAME_SIZE;\\n}\\ngame_loop.last_frame = perf;\\ngame.draw(&renderer);\\n\",\"language\":\"js\",\"meta\":\"\",\"style\":\"\"},\"children\":[{\"type\":\"element\",\"tag\":\"code\",\"props\":{\"__ignoreMap\":\"\"},\"children\":[{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"class\":\"line\",\"line\":1},\"children\":[{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-default:#FF79C6\"},\"children\":[{\"type\":\"text\",\"value\":\"const\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-default:#F8F8F2\"},\"children\":[{\"type\":\"text\",\"value\":\" FRAME_SIZE\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-default:#FF79C6\"},\"children\":[{\"type\":\"text\",\"value\":\":\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-default:#8BE9FD;--shiki-default-font-style:italic\"},\"children\":[{\"type\":\"text\",\"value\":\" f64\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-default:#FF79C6\"},\"children\":[{\"type\":\"text\",\"value\":\" =\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-default:#BD93F9\"},\"children\":[{\"type\":\"text\",\"value\":\" 1.0\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-default:#FF79C6\"},\"children\":[{\"type\":\"text\",\"value\":\" /\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-default:#BD93F9\"},\"children\":[{\"type\":\"text\",\"value\":\" 60.0\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-default:#FF79C6\"},\"children\":[{\"type\":\"text\",\"value\":\" *\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-default:#BD93F9\"},\"children\":[{\"type\":\"text\",\"value\":\" 1000.0\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-default:#F8F8F2\"},\"children\":[{\"type\":\"text\",\"value\":\";\\n\"}]}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"class\":\"line\",\"line\":2},\"children\":[{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"emptyLinePlaceholder\":true},\"children\":[{\"type\":\"text\",\"value\":\"\\n\"}]}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"class\":\"line\",\"line\":3},\"children\":[{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-default:#FF79C6\"},\"children\":[{\"type\":\"text\",\"value\":\"while\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-default:#F8F8F2\"},\"children\":[{\"type\":\"text\",\"value\":\" game_loop.accumulated_delta \"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-default:#FF79C6\"},\"children\":[{\"type\":\"text\",\"value\":\">\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-default:#F8F8F2\"},\"children\":[{\"type\":\"text\",\"value\":\" FRAME_SIZE {\\n\"}]}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"class\":\"line\",\"line\":4},\"children\":[{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-default:#F8F8F2\"},\"children\":[{\"type\":\"text\",\"value\":\"    game.\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-default:#50FA7B\"},\"children\":[{\"type\":\"text\",\"value\":\"update\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-default:#F8F8F2\"},\"children\":[{\"type\":\"text\",\"value\":\"(\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-default:#FF79C6\"},\"children\":[{\"type\":\"text\",\"value\":\"&\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-default:#F8F8F2\"},\"children\":[{\"type\":\"text\",\"value\":\"keystate);\\n\"}]}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"class\":\"line\",\"line\":5},\"children\":[{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-default:#F8F8F2\"},\"children\":[{\"type\":\"text\",\"value\":\"    game_loop.accumulated_delta \"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-default:#FF79C6\"},\"children\":[{\"type\":\"text\",\"value\":\"-=\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-default:#F8F8F2\"},\"children\":[{\"type\":\"text\",\"value\":\" FRAME_SIZE;\\n\"}]}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"class\":\"line\",\"line\":6},\"children\":[{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-default:#F8F8F2\"},\"children\":[{\"type\":\"text\",\"value\":\"}\\n\"}]}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"class\":\"line\",\"line\":7},\"children\":[{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-default:#F8F8F2\"},\"children\":[{\"type\":\"text\",\"value\":\"game_loop.last_frame \"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-default:#FF79C6\"},\"children\":[{\"type\":\"text\",\"value\":\"=\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-default:#F8F8F2\"},\"children\":[{\"type\":\"text\",\"value\":\" perf;\\n\"}]}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"class\":\"line\",\"line\":8},\"children\":[{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-default:#F8F8F2\"},\"children\":[{\"type\":\"text\",\"value\":\"game.\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-default:#50FA7B\"},\"children\":[{\"type\":\"text\",\"value\":\"draw\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-default:#F8F8F2\"},\"children\":[{\"type\":\"text\",\"value\":\"(\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-default:#FF79C6\"},\"children\":[{\"type\":\"text\",\"value\":\"&\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-default:#F8F8F2\"},\"children\":[{\"type\":\"text\",\"value\":\"renderer);\\n\"}]}]}]}]},{\"type\":\"element\",\"tag\":\"p\",\"props\":{},\"children\":[{\"type\":\"element\",\"tag\":\"a\",\"props\":{\"href\":\"https://developer.mozilla.org/en-US/docs/Glossary/FPS\",\"rel\":[\"nofollow\"]},\"children\":[{\"type\":\"text\",\"value\":\"Browser Frame rate(FPS)\"}]}]},{\"type\":\"element\",\"tag\":\"ul\",\"props\":{},\"children\":[{\"type\":\"element\",\"tag\":\"li\",\"props\":{},\"children\":[{\"type\":\"text\",\"value\":\"Rust ownership, particularly the concept of borrowing and lifetimes, is crucial for understanding this implementation.\"}]}]},{\"type\":\"element\",\"tag\":\"pre\",\"props\":{\"className\":\"language-js shiki shiki-themes dracula\",\"code\":\"impl GameLoop {\\n    let f: SharedLoopClosure = Rc::new(RefCell::new(None));\\n    let g = f.clone();\\n    let mut keystate = KeyState::new();\\n    *g.borrow_mut() = Some(browser::create_raf_closure(move |perf: f64| {\\n        let _= browser::request_animation_frame(f.borrow().as_ref().unwrap());\\n    }));\\n    browser::request_animation_frame(\\n        g.borrow()\\n            .as_ref()\\n            .ok_or_else(|| anyhow!(\\\"GameLoop: Loop is None\\\"))?,\\n    )?;\\n    Ok(())\\n}\\n\",\"language\":\"js\",\"meta\":\"\",\"style\":\"\"},\"children\":[{\"type\":\"element\",\"tag\":\"code\",\"props\":{\"__ignoreMap\":\"\"},\"children\":[{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"class\":\"line\",\"line\":1},\"children\":[{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-default:#F8F8F2\"},\"children\":[{\"type\":\"text\",\"value\":\"impl GameLoop {\\n\"}]}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"class\":\"line\",\"line\":2},\"children\":[{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-default:#FF79C6\"},\"children\":[{\"type\":\"text\",\"value\":\"    let\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-default:#F8F8F2\"},\"children\":[{\"type\":\"text\",\"value\":\" f\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-default:#FF79C6\"},\"children\":[{\"type\":\"text\",\"value\":\":\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-default:#8BE9FD;--shiki-default-font-style:italic\"},\"children\":[{\"type\":\"text\",\"value\":\" SharedLoopClosure\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-default:#FF79C6\"},\"children\":[{\"type\":\"text\",\"value\":\" =\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-default:#F8F8F2\"},\"children\":[{\"type\":\"text\",\"value\":\" Rc::\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-default:#FF79C6;--shiki-default-font-weight:bold\"},\"children\":[{\"type\":\"text\",\"value\":\"new\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-default:#F8F8F2\"},\"children\":[{\"type\":\"text\",\"value\":\"(\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-default:#FFB86C;--shiki-default-font-style:italic\"},\"children\":[{\"type\":\"text\",\"value\":\"RefCell\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-default:#FF79C6\"},\"children\":[{\"type\":\"text\",\"value\":\"::\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-default:#FF79C6;--shiki-default-font-weight:bold\"},\"children\":[{\"type\":\"text\",\"value\":\"new\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-default:#F8F8F2\"},\"children\":[{\"type\":\"text\",\"value\":\"(\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-default:#FFB86C;--shiki-default-font-style:italic\"},\"children\":[{\"type\":\"text\",\"value\":\"None\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-default:#F8F8F2\"},\"children\":[{\"type\":\"text\",\"value\":\"));\\n\"}]}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"class\":\"line\",\"line\":3},\"children\":[{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-default:#F8F8F2\"},\"children\":[{\"type\":\"text\",\"value\":\"    let g \"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-default:#FF79C6\"},\"children\":[{\"type\":\"text\",\"value\":\"=\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-default:#F8F8F2\"},\"children\":[{\"type\":\"text\",\"value\":\" f.\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-default:#50FA7B\"},\"children\":[{\"type\":\"text\",\"value\":\"clone\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-default:#F8F8F2\"},\"children\":[{\"type\":\"text\",\"value\":\"();\\n\"}]}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"class\":\"line\",\"line\":4},\"children\":[{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-default:#FF79C6\"},\"children\":[{\"type\":\"text\",\"value\":\"    let\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-default:#F8F8F2\"},\"children\":[{\"type\":\"text\",\"value\":\" mut keystate \"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-default:#FF79C6\"},\"children\":[{\"type\":\"text\",\"value\":\"=\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-default:#F8F8F2\"},\"children\":[{\"type\":\"text\",\"value\":\" KeyState::\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-default:#FF79C6;--shiki-default-font-weight:bold\"},\"children\":[{\"type\":\"text\",\"value\":\"new\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-default:#F8F8F2\"},\"children\":[{\"type\":\"text\",\"value\":\"();\\n\"}]}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"class\":\"line\",\"line\":5},\"children\":[{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-default:#FF79C6\"},\"children\":[{\"type\":\"text\",\"value\":\"    *\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-default:#F8F8F2\"},\"children\":[{\"type\":\"text\",\"value\":\"g.\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-default:#50FA7B\"},\"children\":[{\"type\":\"text\",\"value\":\"borrow_mut\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-default:#F8F8F2\"},\"children\":[{\"type\":\"text\",\"value\":\"() \"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-default:#FF79C6\"},\"children\":[{\"type\":\"text\",\"value\":\"=\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-default:#50FA7B\"},\"children\":[{\"type\":\"text\",\"value\":\" Some\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-default:#F8F8F2\"},\"children\":[{\"type\":\"text\",\"value\":\"(browser::\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-default:#50FA7B\"},\"children\":[{\"type\":\"text\",\"value\":\"create_raf_closure\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-default:#F8F8F2\"},\"children\":[{\"type\":\"text\",\"value\":\"(move \"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-default:#FF79C6\"},\"children\":[{\"type\":\"text\",\"value\":\"|\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-default:#F8F8F2\"},\"children\":[{\"type\":\"text\",\"value\":\"perf: f64\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-default:#FF79C6\"},\"children\":[{\"type\":\"text\",\"value\":\"|\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-default:#F8F8F2\"},\"children\":[{\"type\":\"text\",\"value\":\" {\\n\"}]}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"class\":\"line\",\"line\":6},\"children\":[{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-default:#F8F8F2\"},\"children\":[{\"type\":\"text\",\"value\":\"        let _\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-default:#FF79C6\"},\"children\":[{\"type\":\"text\",\"value\":\"=\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-default:#F8F8F2\"},\"children\":[{\"type\":\"text\",\"value\":\" browser::\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-default:#50FA7B\"},\"children\":[{\"type\":\"text\",\"value\":\"request_animation_frame\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-default:#F8F8F2\"},\"children\":[{\"type\":\"text\",\"value\":\"(f.\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-default:#50FA7B\"},\"children\":[{\"type\":\"text\",\"value\":\"borrow\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-default:#F8F8F2\"},\"children\":[{\"type\":\"text\",\"value\":\"().\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-default:#50FA7B\"},\"children\":[{\"type\":\"text\",\"value\":\"as_ref\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-default:#F8F8F2\"},\"children\":[{\"type\":\"text\",\"value\":\"().\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-default:#50FA7B\"},\"children\":[{\"type\":\"text\",\"value\":\"unwrap\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-default:#F8F8F2\"},\"children\":[{\"type\":\"text\",\"value\":\"());\\n\"}]}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"class\":\"line\",\"line\":7},\"children\":[{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-default:#F8F8F2\"},\"children\":[{\"type\":\"text\",\"value\":\"    }));\\n\"}]}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"class\":\"line\",\"line\":8},\"children\":[{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-default:#F8F8F2\"},\"children\":[{\"type\":\"text\",\"value\":\"    browser::\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-default:#50FA7B\"},\"children\":[{\"type\":\"text\",\"value\":\"request_animation_frame\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-default:#F8F8F2\"},\"children\":[{\"type\":\"text\",\"value\":\"(\\n\"}]}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"class\":\"line\",\"line\":9},\"children\":[{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-default:#F8F8F2\"},\"children\":[{\"type\":\"text\",\"value\":\"        g.\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-default:#50FA7B\"},\"children\":[{\"type\":\"text\",\"value\":\"borrow\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-default:#F8F8F2\"},\"children\":[{\"type\":\"text\",\"value\":\"()\\n\"}]}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"class\":\"line\",\"line\":10},\"children\":[{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-default:#F8F8F2\"},\"children\":[{\"type\":\"text\",\"value\":\"            .\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-default:#50FA7B\"},\"children\":[{\"type\":\"text\",\"value\":\"as_ref\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-default:#F8F8F2\"},\"children\":[{\"type\":\"text\",\"value\":\"()\\n\"}]}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"class\":\"line\",\"line\":11},\"children\":[{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-default:#F8F8F2\"},\"children\":[{\"type\":\"text\",\"value\":\"            .\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-default:#50FA7B\"},\"children\":[{\"type\":\"text\",\"value\":\"ok_or_else\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-default:#F8F8F2\"},\"children\":[{\"type\":\"text\",\"value\":\"(\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-default:#FF79C6\"},\"children\":[{\"type\":\"text\",\"value\":\"||\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-default:#50FA7B\"},\"children\":[{\"type\":\"text\",\"value\":\" anyhow\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-default:#FF79C6\"},\"children\":[{\"type\":\"text\",\"value\":\"!\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-default:#F8F8F2\"},\"children\":[{\"type\":\"text\",\"value\":\"(\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-default:#E9F284\"},\"children\":[{\"type\":\"text\",\"value\":\"\\\"\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-default:#F1FA8C\"},\"children\":[{\"type\":\"text\",\"value\":\"GameLoop: Loop is None\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-default:#E9F284\"},\"children\":[{\"type\":\"text\",\"value\":\"\\\"\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-default:#F8F8F2\"},\"children\":[{\"type\":\"text\",\"value\":\"))\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-default:#FF79C6\"},\"children\":[{\"type\":\"text\",\"value\":\"?\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-default:#F8F8F2\"},\"children\":[{\"type\":\"text\",\"value\":\",\\n\"}]}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"class\":\"line\",\"line\":12},\"children\":[{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-default:#F8F8F2\"},\"children\":[{\"type\":\"text\",\"value\":\"    )\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-default:#FF79C6\"},\"children\":[{\"type\":\"text\",\"value\":\"?\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-default:#F8F8F2\"},\"children\":[{\"type\":\"text\",\"value\":\";\\n\"}]}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"class\":\"line\",\"line\":13},\"children\":[{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-default:#50FA7B\"},\"children\":[{\"type\":\"text\",\"value\":\"    Ok\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-default:#F8F8F2\"},\"children\":[{\"type\":\"text\",\"value\":\"(())\\n\"}]}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"class\":\"line\",\"line\":14},\"children\":[{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-default:#F8F8F2\"},\"children\":[{\"type\":\"text\",\"value\":\"}\\n\"}]}]}]}]},{\"type\":\"element\",\"tag\":\"h3\",\"props\":{\"id\":\"it-was-a-fun-experience-to-code-a-game\"},\"children\":[{\"type\":\"text\",\"value\":\"It was a fun experience to code a game\"}]},{\"type\":\"element\",\"tag\":\"p\",\"props\":{},\"children\":[{\"type\":\"text\",\"value\":\"Forty years ago, my first personal computer was an MSX2. I enjoyed programming by typing in the source code published in BASIC Magazine. The first program I typed was a racing game similar to the one I've created recently. Though my memory is a bit hazy, I recall the walls being represented by \\\"#\\\" and the car by a diamond character \\\"♢\\\". I remember spending hours correcting typos while referencing the magazine's source code. The joy I felt when the copied program finally ran is something I'll never forget. The excitement of seeing a program come to life hasn't changed at all, even now.\"}]},{\"type\":\"element\",\"tag\":\"style\",\"props\":{},\"children\":[{\"type\":\"text\",\"value\":\"html .default .shiki span {color: var(--shiki-default);background: var(--shiki-default-bg);font-style: var(--shiki-default-font-style);font-weight: var(--shiki-default-font-weight);text-decoration: var(--shiki-default-text-decoration);}html .shiki span {color: var(--shiki-default);background: var(--shiki-default-bg);font-style: var(--shiki-default-font-style);font-weight: var(--shiki-default-font-weight);text-decoration: var(--shiki-default-text-decoration);}\"}]}],\"toc\":{\"title\":\"\",\"searchDepth\":2,\"depth\":2,\"links\":[{\"id\":\"introduction\",\"depth\":3,\"text\":\"Introduction\"},{\"id\":\"what-i-enjoyed-most-about-programing-a-game-loop\",\"depth\":3,\"text\":\"What I enjoyed most about programing a game loop\"},{\"id\":\"it-was-a-fun-experience-to-code-a-game\",\"depth\":3,\"text\":\"It was a fun experience to code a game\"}]}},\"_type\":\"markdown\",\"_id\":\"content:blogs:1. cart.md\",\"_source\":\"content\",\"_file\":\"blogs/1. cart.md\",\"_stem\":\"blogs/1. cart\",\"_extension\":\"md\",\"sitemap\":{\"loc\":\"/blogs/cart\"}},\"hash\":\"C8kRqxplUh\"}";

export { _1__cart as default };
//# sourceMappingURL=1. cart.mjs.map
