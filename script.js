:root {
    --bg: #f5f7fb;
    --surface: #ffffff;
    --surface-2: #f8fafc;
    --text: #172033;
    --muted: #7b8497;
    --border: #e7eaf0;

    --primary: #6c63ff;
    --primary-dark: #554bdc;

    --purple-soft: #f0edff;
    --blue-soft: #e8f1ff;
    --green-soft: #e9f9ef;
    --orange-soft: #fff1e5;
    --pink-soft: #ffedf5;

    --shadow: 0 10px 40px rgba(28, 35, 54, 0.06);
    --radius: 18px;

    --sidebar: #111522;
    --sidebar-text: #9ca3b4;
}

body.dark {
    --bg: #0f1320;
    --surface: #171c2a;
    --surface-2: #1c2231;
    --text: #f1f4fa;
    --muted: #929bad;
    --border: #282f40;

    --purple-soft: #282442;
    --blue-soft: #1d2b42;
    --green-soft: #1d3528;
    --orange-soft: #382919;
    --pink-soft: #392431;

    --shadow: 0 10px 40px rgba(0, 0, 0, .2);
}

* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}

html {
    scroll-behavior: smooth;
}

body {
    font-family: "Inter", Arial, sans-serif;
    background: var(--bg);
    color: var(--text);
    min-height: 100vh;
    transition: background .2s, color .2s;
}

button,
input,
select,
textarea {
    font: inherit;
}

button {
    cursor: pointer;
}

.app {
    min-height: 100vh;
}


/* SIDEBAR */

.sidebar {
    width: 260px;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;

    background: var(--sidebar);
    color: white;

    padding: 25px 16px;

    display: flex;
    flex-direction: column;

    z-index: 100;
}

.brand {
    display: flex;
    align-items: center;
    gap: 12px;

    padding: 5px 10px 35px;
}

.brand-icon {
    width: 40px;
    height: 40px;

    display: grid;
    place-items: center;

    background: linear-gradient(135deg, #7c6dff, #574cf0);

    border-radius: 12px;

    font-weight: 800;
    font-size: 18px;

    box-shadow: 0 8px 20px rgba(108, 99, 255, .25);
}

.brand-text strong {
    display: block;
    font-size: 16px;
}

.brand-text span {
    display: block;
    color: #70788b;
    font-size: 11px;
    margin-top: 3px;
}

.sidebar-section {
    margin-bottom: 28px;
}

.sidebar-label {
    padding: 0 12px;
    color: #60687a;
    font-size: 10px;
    font-weight: 700;
    letter-spacing: .14em;
}

.nav-item {
    width: 100%;
    border: none;

    display: flex;
    align-items: center;
    gap: 12px;

    padding: 12px;

    margin-top: 5px;

    border-radius: 10px;

    background: transparent;

    color: var(--sidebar-text);

    text-align: left;

    font-size: 13px;

    transition: .2s;
}

.nav-item:hover {
    background: rgba(255,255,255,.05);
    color: white;
}

.nav-item.active {
    background: rgba(108,99,255,.17);
    color: white;
}

.nav-icon {
    width: 22px;
    text-align: center;
    font-size: 17px;
    opacity: .9;
}

.nav-badge {
    margin-left: auto;

    min-width: 22px;
    height: 22px;

    display: grid;
    place-items: center;

    padding: 0 6px;

    border-radius: 20px;

    background: #292e40;
    color: #c9ccdb;

    font-size: 10px;
}

.sidebar-bottom {
    margin-top: auto;
}

.user-card {
    border-top: 1px solid rgba(255,255,255,.07);

    margin-top: 12px;
    padding-top: 18px;

    display: flex;
    align-items: center;
    gap: 10px;
}

.avatar,
.top-avatar {
    display: grid;
    place-items: center;

    border-radius: 50%;

    background: linear-gradient(135deg, #7972ff, #5146dd);

    color: white;
    font-weight: 700;
}

.avatar {
    width: 34px;
    height: 34px;
}

.user-info {
    flex: 1;
}

.user-info strong {
    display: block;
    font-size: 12px;
}

.user-info span {
    display: block;
    margin-top: 2px;

    color: #747c8d;
    font-size: 10px;
}

.more-button {
    background: none;
    border: none;
    color: #72798a;
}


/* MAIN */

.main {
    margin-left: 260px;
    min-height: 100vh;
}

.topbar {
    height: 76px;

    display: flex;
    align-items: center;

    padding: 0 36px;

    background: var(--surface);

    border-bottom: 1px solid var(--border);

    position: sticky;
    top: 0;
    z-index: 50;
}

.search-box {
    width: 360px;

    display: flex;
    align-items: center;

    gap: 10px;

    padding: 10px 13px;

    background: var(--surface-2);

    border: 1px solid var(--border);

    border-radius: 10px;

    color: var(--muted);
}

.search-box input {
    flex: 1;

    border: none;
    outline: none;

    background: transparent;

    color: var(--text);

    font-size: 12px;
}

.search-box kbd {
    padding: 4px 6px;

    border: 1px solid var(--border);
    border-radius: 5px;

    color: var(--muted);

    font-size: 9px;
}

.topbar-actions {
    margin-left: auto;

    display: flex;
    align-items: center;

    gap: 22px;
}

.icon-button {
    position: relative;

    width: 36px;
    height: 36px;

    border: none;

    background: transparent;

    border-radius: 10px;

    font-size: 16px;
}

.icon-button:hover {
    background: var(--surface-2);
}

.notification-dot {
    width: 6px;
    height: 6px;

    background: #ff5757;

    border-radius: 50%;

    position: absolute;
    top: 7px;
    right: 7px;
}

.date-display {
    color: var(--muted);
    font-size: 11px;
}

.top-avatar {
    width: 34px;
    height: 34px;
}

.mobile-menu,
.mobile-brand {
    display: none;
}


/* CONTENT */

.content {
    max-width: 1500px;
    padding: 35px;
    margin: auto;
}

.page {
    display: none;
    animation: pageEnter .25s ease;
}

.active-page {
    display: block;
}

@keyframes pageEnter {
    from {
        opacity: 0;
        transform: translateY(5px);
    }

    to {
        opacity: 1;
        transform: translateY(0);
    }
}

.page-header {
    display: flex;
    justify-content: space-between;
    align-items: center;

    margin-bottom: 26px;
}

.eyebrow {
    color: var(--primary);
    font-size: 10px;
    font-weight: 700;
    letter-spacing: .14em;

    margin-bottom: 7px;
}

.page-header h1 {
    font-size: 29px;
    line-height: 1.2;
}

.page-header p {
    color: var(--muted);
    font-size: 12px;

    margin-top: 7px;
}


/* BUTTONS */

.primary-button {
    border: none;

    background: var(--primary);
    color: white;

    padding: 11px 17px;

    border-radius: 9px;

    font-size: 12px;
    font-weight: 600;

    transition: .2s;
}

.primary-button:hover {
    background: var(--primary-dark);
    transform: translateY(-1px);
}

.primary-button.small {
    padding: 9px 14px;
}

.text-button {
    border: none;
    background: none;
    color: var(--primary);

    font-size: 11px;
    font-weight: 600;
}


/* HERO */

.hero {
    position: relative;
    overflow: hidden;

    min-height: 180px;

    border-radius: 20px;

    padding: 30px;

    margin-bottom: 22px;

    background:
        radial-gradient(circle at 80% 30%, rgba(156,145,255,.45), transparent 30%),
        linear-gradient(110deg, #5a50dd, #7a6ff4);

    color: white;
}

.hero-content {
    max-width: 550px;
    position: relative;
    z-index: 2;
}

.hero-label {
    font-size: 10px;
    letter-spacing: .18em;
    opacity: .7;
}

.hero h2 {
    font-size: 26px;
    margin: 10px 0 7px;
}

.hero p {
    font-size: 12px;
    opacity: .85;
}

.hero-progress {
    display: flex;
    align-items: center;
    gap: 12px;

    margin-top: 22px;

    max-width: 430px;
}

.hero-progress-bar {
    height: 7px;
    flex: 1;

    background: rgba(255,255,255,.22);
    border-radius: 20px;

    overflow: hidden;
}

.hero-progress-bar div {
    height: 100%;
    width: 0;

    background: white;

    border-radius: inherit;

    transition: width .5s;
}

.hero-progress span {
    font-size: 11px;
    font-weight: 700;
}

.hero-decoration {
    position: absolute;
    top: 0;
    right: 0;

    width: 45%;
    height: 100%;
}

.hero-circle {
    position: absolute;

    border-radius: 50%;

    border: 1px solid rgba(255,255,255,.15);
}

.circle-one {
    width: 280px;
    height: 280px;

    right: 30px;
    top: -50px;
}

.circle-two {
    width: 190px;
    height: 190px;

    right: 75px;
    top: -5px;
}

.circle-three {
    width: 100px;
    height: 100px;

    right: 120px;
    top: 40px;
}


/* STATS */

.stats-grid {
    display: grid;

    grid-template-columns: repeat(4, 1fr);

    gap: 16px;

    margin-bottom: 20px;
}

.stat-card {
    padding: 20px;

    background: var(--surface);

    border: 1px solid var(--border);

    border-radius: var(--radius);

    box-shadow: var(--shadow);
}

.stat-top {
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.stat-icon {
    width: 34px;
    height: 34px;

    display: grid;
    place-items: center;

    border-radius: 9px;

    font-size: 15px;
}

.stat-icon.purple {
    background: var(--purple-soft);
    color: var(--primary);
}

.stat-icon.blue {
    background: var(--blue-soft);
    color: #4184ff;
}

.stat-icon.green {
    background: var(--green-soft);
    color: #27ad5e;
}

.stat-icon.orange {
    background: var(--orange-soft);
    color: #ee8a31;
}

.trend {
    font-size: 10px;
    font-weight: 600;
}

.trend.positive {
    color: #25aa5d;
}

.trend.neutral {
    color: var(--muted);
}

.stat-label {
    display: block;

    color: var(--muted);

    font-size: 10px;

    margin-top: 17px;
}

.stat-card strong {
    display: inline-block;

    font-size: 25px;

    margin-top: 4px;
}

.stat-sub {
    color: var(--muted);
    font-size: 9px;
    margin-left: 4px;
}


/* CARDS */

.card {
    padding: 23px;

    background: var(--surface);

    border: 1px solid var(--border);

    border-radius: var(--radius);

    box-shadow: var(--shadow);
}

.card-header {
    display: flex;
    justify-content: space-between;

    align-items: center;

    margin-bottom: 22px;
}

.card-header h2 {
    font-size: 15px;
}

.card-header p {
    color: var(--muted);
    font-size: 10px;

    margin-top: 4px;
}


/* DASHBOARD GRID */

.dashboard-grid {
    display: grid;

    grid-template-columns: 1fr 1fr;

    gap: 20px;

    margin-bottom: 20px;
}


/* TASKS */

.task-preview {
    display: flex;
    align-items: center;

    gap: 12px;

    padding: 13px 0;

    border-bottom: 1px solid var(--border);
}

.task-preview:last-child {
    border-bottom: none;
}

.task-check {
    width: 17px;
    height: 17px;

    accent-color: var(--primary);

    cursor: pointer;
}

.task-preview-main {
    flex: 1;
}

.task-preview-main strong {
    display: block;

    font-size: 11px;
}

.task-preview-main span {
    display: block;

    color: var(--muted);

    font-size: 9px;

    margin-top: 4px;
}

.priority {
    padding: 5px 8px;

    border-radius: 20px;

    font-size: 8px;
    font-weight: 700;
}

.priority.high {
    background: #ffe8e8;
    color: #df4545;
}

.priority.medium {
    background: #fff2df;
    color: #d88720;
}

.priority.low {
    background: var(--green-soft);
    color: #2b9f5b;
}

body.dark .priority.high {
    background: #402528;
}

body.dark .priority.medium {
    background: #403320;
}


/* TIMELINE */

.timeline-item {
    display: grid;

    grid-template-columns: 50px 14px 1fr;

    min-height: 70px;
}

.timeline-time {
    color: var(--muted);

    font-size: 10px;

    padding-top: 2px;
}

.timeline-line {
    position: relative;

    width: 8px;

    border-left: 1px solid var(--border);
}

.timeline-line::before {
    content: "";

    position: absolute;

    width: 7px;
    height: 7px;

    border-radius: 50%;

    background: #c9ced8;

    left: -4px;
    top: 3px;
}

.timeline-item.active .timeline-line::before {
    background: var(--primary);
    box-shadow: 0 0 0 4px var(--purple-soft);
}

.timeline-content {
    padding-left: 14px;
}

.timeline-content strong {
    display: block;

    font-size: 11px;
}

.timeline-content span {
    color: var(--muted);

    font-size: 9px;

    display: block;

    margin-top: 4px;
}


/* PERFORMANCE */

.performance-row {
    display: grid;

    grid-template-columns: 34px 145px 1fr 40px;

    gap: 12px;

    align-items: center;

    margin-bottom: 17px;
}

.performance-row:last-child {
    margin-bottom: 0;
}

.performance-icon {
    width: 30px;
    height: 30px;

    display: grid;
    place-items: center;

    background: var(--surface-2);

    border-radius: 8px;

    color: var(--primary);

    font-size: 10px;

    font-weight: 700;
}

.performance-name strong {
    display: block;
    font-size: 10px;
}

.performance-name span {
    display: block;

    margin-top: 3px;

    color: var(--muted);

    font-size: 8px;
}

.mini-progress {
    height: 6px;

    background: var(--border);

    border-radius: 20px;

    overflow: hidden;
}

.mini-progress div {
    height: 100%;

    background: linear-gradient(90deg, #6c63ff, #958cff);

    border-radius: inherit;
}

.performance-row > strong {
    font-size: 10px;
}


/* NOTE */

.note-icon {
    width: 31px;
    height: 31px;

    display: grid;
    place-items: center;

    border-radius: 8px;

    background: var(--purple-soft);
    color: var(--primary);
}

.quick-note {
    width: 100%;
    height: 115px;

    border: 1px solid var(--border);

    border-radius: 11px;

    resize: none;

    outline: none;

    background: var(--surface-2);

    color: var(--text);

    padding: 13px;

    font-size: 11px;
}

.quick-note:focus {
    border-color: var(--primary);
}

.note-footer {
    display: flex;
    align-items: center;
    justify-content: space-between;

    margin-top: 10px;
}

.note-footer span {
    color: var(--muted);
    font-size: 9px;
}


/* TASK PAGE */

.task-toolbar {
    display: flex;

    align-items: center;
    justify-content: space-between;

    margin-bottom: 16px;
}

.filter-tabs {
    display: flex;
    gap: 5px;
}

.filter-tab {
    border: none;

    background: transparent;

    color: var(--muted);

    font-size: 11px;

    padding: 8px 12px;

    border-radius: 8px;
}

.filter-tab.active {
    background: var(--surface);

    color: var(--text);

    box-shadow: var(--shadow);
}

.select {
    border: 1px solid var(--border);

    background: var(--surface);

    color: var(--text);

    border-radius: 8px;

    padding: 8px 12px;

    font-size: 10px;

    outline: none;
}

.full-task {
    display: grid;

    grid-template-columns: 25px 1fr auto;

    align-items: center;

    gap: 14px;

    padding: 16px 0;

    border-bottom: 1px solid var(--border);
}

.full-task:last-child {
    border-bottom: none;
}

.full-task-title {
    font-size: 11px;
}

.full-task.completed .full-task-title {
    text-decoration: line-through;
    color: var(--muted);
}

.full-task-meta {
    color: var(--muted);

    font-size: 9px;

    margin-top: 5px;
}

.task-actions {
    display: flex;
    align-items: center;
    gap: 7px;
}

.delete-task,
.complete-task {
    border: none;

    width: 30px;
    height: 30px;

    border-radius: 8px;

    background: var(--surface-2);

    color: var(--muted);
}

.delete-task:hover {
    color: #f24f4f;
}


/* SUBJECTS */

.subjects-grid {
    display: grid;

    grid-template-columns: repeat(3, 1fr);

    gap: 18px;
}

.subject-card {
    padding: 22px;

    border-radius: var(--radius);

    background: var(--surface);

    border: 1px solid var(--border);

    box-shadow: var(--shadow);

    transition: .2s;
}

.subject-card:hover {
    transform: translateY(-2px);
}

.subject-top {
    display: flex;

    justify-content: space-between;

    align-items: flex-start;

    margin-bottom: 18px;
}

.large-subject-icon {
    width: 44px;
    height: 44px;

    display: grid;
    place-items: center;

    border-radius: 12px;

    font-size: 15px;
    font-weight: 800;
}

.purple-bg {
    background: var(--purple-soft);
    color: var(--primary);
}

.blue-bg {
    background: var(--blue-soft);
    color: #4385ff;
}

.green-bg {
    background: var(--green-soft);
    color: #27a55a;
}

.orange-bg {
    background: var(--orange-soft);
    color: #e8882e;
}

.pink-bg {
    background: var(--pink-soft);
    color: #d65388;
}

.cyan-bg {
    background: #e7f8fb;
    color: #2299ad;
}

.grade-badge {
    padding: 6px 9px;

    background: var(--surface-2);

    border-radius: 7px;

    color: var(--text);

    font-size: 10px;

    font-weight: 700;
}

.subject-card h2 {
    font-size: 14px;
}

.subject-card p {
    color: var(--muted);

    font-size: 10px;

    margin-top: 4px;
}

.subject-progress {
    height: 6px;

    margin: 20px 0 14px;

    background: var(--border);

    border-radius: 20px;

    overflow: hidden;
}

.subject-progress div {
    height: 100%;

    background: var(--primary);
}

.subject-footer {
    display: flex;

    justify-content: space-between;

    color: var(--muted);

    font-size: 8px;
}


/* SCHEDULE */

.week-grid {
    display: grid;

    grid-template-columns: repeat(5, 1fr);

    gap: 10px;
}

.day-column {
    min-height: 520px;

    padding: 12px;

    border: 1px solid var(--border);

    background: var(--surface);

    border-radius: 14px;
}

.day-column.today {
    border-color: rgba(108,99,255,.5);

    box-shadow:
        0 0 0 1px rgba(108,99,255,.12),
        var(--shadow);
}

.day-header {
    text-align: center;

    padding-bottom: 12px;

    border-bottom: 1px solid var(--border);

    margin-bottom: 12px;
}

.day-header span {
    display: block;

    color: var(--muted);

    font-size: 8px;

    letter-spacing: .1em;
}

.day-header strong {
    display: block;

    margin-top: 3px;

    font-size: 18px;
}

.class-block {
    padding: 12px;

    margin-bottom: 9px;

    border-radius: 10px;

    border-left: 3px solid;
}

.class-block strong {
    display: block;

    font-size: 9px;
}

.class-block span {
    display: block;

    color: var(--muted);

    font-size: 7px;

    margin-top: 5px;
}

.class-block.purple {
    background: var(--purple-soft);
    border-color: var(--primary);
}

.class-block.blue {
    background: var(--blue-soft);
    border-color: #4385ff;
}

.class-block.green {
    background: var(--green-soft);
    border-color: #28a65b;
}

.class-block.orange {
    background: var(--orange-soft);
    border-color: #eb8b30;
}

.class-block.pink {
    background: var(--pink-soft);
    border-color: #d65388;
}


/* GRADES */

.grade-summary {
    display: grid;

    grid-template-columns: .75fr 1.25fr;

    gap: 20px;

    margin-bottom: 20px;
}

.grade-big-card,
.grade-overview-card {
    background: var(--surface);

    border: 1px solid var(--border);

    border-radius: var(--radius);

    box-shadow: var(--shadow);

    padding: 25px;
}

.grade-big-card {
    text-align: center;
}

.grade-big-card > span {
    color: var(--muted);
    font-size: 10px;
}

.grade-big-card > strong {
    display: block;

    font-size: 42px;

    margin: 10px 0 5px;
}

.grade-ring {
    width: 95px;
    height: 95px;

    margin: 10px auto 12px;

    border-radius: 50%;

    display: grid;
    place-items: center;

    background:
        conic-gradient(
            var(--primary) 0 89%,
            var(--border) 89% 100%
        );
}

.ring-inner {
    width: 72px;
    height: 72px;

    border-radius: 50%;

    background: var(--surface);

    display: grid;
    place-items: center;

    font-weight: 800;
}

.grade-big-card p {
    color: var(--muted);
    font-size: 9px;
}

.grade-overview-card h2 {
    font-size: 14px;

    margin-bottom: 18px;
}

.bar-chart {
    height: 205px;

    display: flex;

    align-items: flex-end;

    justify-content: space-around;

    gap: 16px;
}

.bar-item {
    height: 100%;

    display: flex;
    flex-direction: column;

    align-items: center;

    justify-content: flex-end;

    gap: 7px;

    flex: 1;
}

.bar {
    width: 30px;

    height: 150px;

    background: var(--surface-2);

    border-radius: 7px;

    display: flex;
    align-items: flex-end;

    overflow: hidden;
}

.bar div {
    width: 100%;

    background: linear-gradient(to top, var(--primary), #9a91ff);

    border-radius: 7px;
}

.bar-item span {
    font-size: 8px;
    color: var(--muted);
}

.bar-item strong {
    font-size: 9px;
}

.grades-table {
    width: 100%;
}

.grade-row {
    display: grid;

    grid-template-columns: 1fr 1.4fr .7fr .4fr;

    align-items: center;

    gap: 12px;

    padding: 13px 0;

    border-bottom: 1px solid var(--border);

    font-size: 10px;
}

.grade-row:last-child {
    border-bottom: none;
}

.grade-row.heading {
    color: var(--muted);
    font-size: 8px;
}

.grade-row strong {
    color: var(--primary);
}


/* NOTES */

.notes-grid {
    display: grid;

    grid-template-columns: repeat(3, 1fr);

    gap: 18px;
}

.note-card {
    padding: 20px;

    background: var(--surface);

    border: 1px solid var(--border);

    border-radius: var(--radius);

    box-shadow: var(--shadow);
}

.note-card h2 {
    font-size: 14px;
}

.note-card p {
    color: var(--muted);

    font-size: 10px;

    line-height: 1.7;

    margin-top: 10px;

    white-space: pre-wrap;
}

.note-card-footer {
    display: flex;

    justify-content: space-between;

    align-items: center;

    margin-top: 18px;

    color: var(--muted);

    font-size: 8px;
}

.note-delete {
    border: none;

    background: transparent;

    color: var(--muted);

    cursor: pointer;
}


/* CALENDAR */

.calendar-card {
    padding: 26px;

    background: var(--surface);

    border: 1px solid var(--border);

    border-radius: var(--radius);

    box-shadow: var(--shadow);
}

.calendar-header {
    display: flex;

    align-items: center;

    justify-content: space-between;

    margin-bottom: 25px;
}

.calendar-header h2 {
    font-size: 16px;
}

.calendar-nav {
    width: 32px;
    height: 32px;

    border: 1px solid var(--border);

    background: var(--surface-2);

    color: var(--text);

    border-radius: 8px;
}

.calendar-weekdays,
.calendar-days {
    display: grid;

    grid-template-columns: repeat(7, 1fr);
}

.calendar-weekdays {
    color: var(--muted);

    font-size: 8px;

    margin-bottom: 10px;
}

.calendar-days {
    gap: 5px;
}

.calendar-days span {
    min-height: 70px;

    padding: 10px;

    border-radius: 10px;

    font-size: 10px;

    background: var(--surface-2);
}

.calendar-days span:hover {
    background: var(--purple-soft);
}

.calendar-days .muted {
    opacity: .35;
}

.today-number {
    background: var(--primary) !important;
    color: white;

    font-weight: 700;
}


/* TIMER */

.timer-layout {
    display: grid;

    grid-template-columns: 1fr 1fr;

    gap: 20px;
}

.timer-card {
    min-height: 480px;

    background: var(--surface);

    border: 1px solid var(--border);

    border-radius: var(--radius);

    box-shadow: var(--shadow);

    padding: 35px;

    display: flex;
    flex-direction: column;

    align-items: center;
}

.timer-mode {
    display: flex;

    padding: 4px;

    border-radius: 9px;

    background: var(--surface-2);
}

.timer-mode button {
    border: none;

    background: transparent;

    color: var(--muted);

    padding: 8px 13px;

    border-radius: 7px;

    font-size: 10px;
}

.timer-mode button.active {
    background: var(--surface);

    color: var(--text);

    box-shadow: var(--shadow);
}

.timer-circle {
    width: 260px;
    height: 260px;

    border-radius: 50%;

    margin: 45px 0 30px;

    display: grid;
    place-items: center;

    background:
        conic-gradient(
            var(--primary) 0 70%,
            var(--border) 70% 100%
        );
}

.timer-inner {
    width: 215px;
    height: 215px;

    border-radius: 50%;

    background: var(--surface);

    display: grid;
    place-items: center;

    align-content: center;
}

.timer-inner span {
    font-size: 48px;

    font-weight: 700;
}

.timer-inner small {
    color: var(--muted);

    letter-spacing: .15em;

    font-size: 8px;

    margin-top: 3px;
}

.timer-controls {
    display: flex;

    gap: 10px;
}

.timer-start {
    border: none;

    padding: 12px 28px;

    border-radius: 10px;

    background: var(--primary);

    color: white;

    font-weight: 600;
}

.timer-reset {
    border: 1px solid var(--border);

    padding: 12px 20px;

    border-radius: 10px;

    background: var(--surface);

    color: var(--text);
}

.focus-stat {
    display: flex;

    justify-content: space-between;

    align-items: center;

    padding: 17px 0;

    border-bottom: 1px solid var(--border);

    color: var(--muted);

    font-size: 10px;
}

.focus-stat:last-child {
    border-bottom: none;
}

.focus-stat strong {
    color: var(--text);

    font-size: 14px;
}


/* ATTENDANCE */

.attendance-layout {
    display: grid;

    grid-template-columns: 1fr 1.5fr;

    gap: 20px;
}

.attendance-main {
    min-height: 400px;

    display: flex;

    align-items: center;

    justify-content: center;

    flex-direction: column;

    gap: 30px;

    background: var(--surface);

    border: 1px solid var(--border);

    border-radius: var(--radius);

    box-shadow: var(--shadow);
}

.attendance-circle {
    width: 190px;
    height: 190px;

    border-radius: 50%;

    display: grid;
    place-items: center;

    align-content: center;

    background:
        conic-gradient(
            #35b86d 0 94%,
            var(--border) 94% 100%
        );

    position: relative;
}

.attendance-circle::after {
    content: "";

    width: 145px;
    height: 145px;

    position: absolute;

    border-radius: 50%;

    background: var(--surface);
}

.attendance-circle span,
.attendance-circle small {
    position: relative;
    z-index: 2;
}

.attendance-circle span {
    font-size: 32px;

    font-weight: 800;
}

.attendance-circle small {
    color: var(--muted);

    font-size: 9px;
}

.attendance-legend {
    width: 75%;
}

.attendance-legend > div {
    display: flex;

    align-items: center;

    gap: 10px;

    padding: 7px 0;

    font-size: 10px;
}

.attendance-legend strong {
    margin-left: auto;
}

.legend-dot {
    width: 8px;
    height: 8px;

    border-radius: 50%;
}

.legend-dot.present {
    background: #35b86d;
}

.legend-dot.late {
    background: #e99a3c;
}

.legend-dot.absent {
    background: #ed5a5a;
}

.attendance-row {
    display: flex;

    justify-content: space-between;

    padding: 15px 0;

    border-bottom: 1px solid var(--border);

    font-size: 10px;
}

.attendance-row:last-child {
    border-bottom: none;
}

.attendance-present {
    color: #2da75f;
}

.attendance-late {
    color: #dc8a2c;
}

.attendance-absent {
    color: #e05555;
}


/* SETTINGS */

.settings-card {
    background: var(--surface);

    border: 1px solid var(--border);

    border-radius: var(--radius);

    box-shadow: var(--shadow);
}

.settings-section {
    padding: 25px;

    border-bottom: 1px solid var(--border);
}

.settings-section:last-child {
    border-bottom: none;
}

.settings-section h2 {
    font-size: 14px;

    margin-bottom: 18px;
}

.setting-row {
    display: flex;

    justify-content: space-between;

    align-items: center;

    padding: 15px 0;

    border-top: 1px solid var(--border);
}

.setting-row strong {
    display: block;

    font-size: 11px;
}

.setting-row span {
    display: block;

    color: var(--muted);

    font-size: 9px;

    margin-top: 4px;
}

.secondary-button {
    border: 1px solid var(--border);

    background: var(--surface);

    color: var(--text);

    padding: 9px 13px;

    border-radius: 8px;

    font-size: 10px;
}

.switch input {
    display: none;
}

.switch span {
    display: block;

    width: 37px;
    height: 21px;

    border-radius: 20px;

    background: #cbd0da;

    position: relative;

    cursor: pointer;

    margin: 0;
}

.switch span::after {
    content: "";

    width: 17px;
    height: 17px;

    border-radius: 50%;

    background: white;

    position: absolute;

    left: 2px;
    top: 2px;

    transition: .2s;
}

.switch input:checked + span {
    background: var(--primary);
}

.switch input:checked + span::after {
    transform: translateX(16px);
}

.danger-button {
    border: 1px solid #efb1b1;

    background: #fff5f5;

    color: #d94a4a;

    padding: 9px 13px;

    border-radius: 8px;

    font-size: 10px;
}

body.dark .danger-button {
    background: #322021;
}


/* MODALS */

.modal {
    display: none;

    position: fixed;

    inset: 0;

    z-index: 1000;

    background: rgba(7, 10, 18, .55);

    backdrop-filter: blur(5px);

    align-items: center;
    justify-content: center;

    padding: 20px;
}

.modal.show {
    display: flex;
}

.modal-box {
    width: min(450px, 100%);

    background: var(--surface);

    border-radius: 18px;

    padding: 25px;

    box-shadow: 0 30px 100px rgba(0,0,0,.25);

    position: relative;
}

.modal-close {
    position: absolute;

    top: 17px;
    right: 18px;

    width: 30px;
    height: 30px;

    border: none;

    background: var(--surface-2);

    color: var(--muted);

    border-radius: 8px;

    font-size: 18px;
}

.modal-header {
    display: flex;

    align-items: center;

    gap: 12px;

    margin-bottom: 22px;
}

.modal-icon {
    width: 40px;
    height: 40px;

    display: grid;
    place-items: center;

    background: var(--purple-soft);

    color: var(--primary);

    border-radius: 10px;
}

.modal-header h2 {
    font-size: 16px;
}

.modal-header p {
    color: var(--muted);

    font-size: 9px;

    margin-top: 4px;
}

.modal-box label {
    display: block;

    color: var(--muted);

    font-size: 9px;

    margin: 15px 0 7px;
}

.modal-box input,
.modal-box select,
.modal-textarea {
    width: 100%;

    padding: 11px;

    border-radius: 8px;

    border: 1px solid var(--border);

    background: var(--surface-2);

    color: var(--text);

    outline: none;

    font-size: 11px;
}

.modal-box input:focus,
.modal-box select:focus,
.modal-textarea:focus {
    border-color: var(--primary);
}

.modal-textarea {
    height: 130px;

    resize: vertical;
}

.modal-submit {
    width: 100%;

    margin-top: 20px;
}


/* NOTIFICATIONS */

.notification-panel {
    position: fixed;

    top: 68px;
    right: 25px;

    width: 340px;

    background: var(--surface);

    border: 1px solid var(--border);

    border-radius: 15px;

    box-shadow: 0 20px 60px rgba(0,0,0,.15);

    padding: 18px;

    z-index: 900;

    opacity: 0;
    visibility: hidden;

    transform: translateY(-10px);

    transition: .2s;
}

.notification-panel.show {
    opacity: 1;
    visibility: visible;

    transform: translateY(0);
}

.notification-header {
    display: flex;

    justify-content: space-between;

    align-items: center;

    padding-bottom: 13px;

    border-bottom: 1px solid var(--border);

    margin-bottom: 5px;
}

.notification-header h3 {
    font-size: 13px;
}

.notification-header button {
    border: none;

    background: none;

    color: var(--muted);

    font-size: 20px;
}

.notification-item {
    display: flex;

    gap: 10px;

    padding: 13px 0;

    border-bottom: 1px solid var(--border);
}

.notification-item:last-child {
    border-bottom: none;
}

.notification-icon {
    width: 30px;
    height: 30px;

    flex-shrink: 0;

    display: grid;
    place-items: center;

    border-radius: 8px;

    font-size: 10px;
}

.notification-item strong {
    display: block;

    font-size: 9px;
}

.notification-item span:last-child {
    display: block;

    margin-top: 4px;

    color: var(--muted);

    font-size: 8px;
}


/* TOAST */

.toast {
    position: fixed;

    left: 50%;
    bottom: 25px;

    transform: translateX(-50%) translateY(20px);

    background: #171c2a;
    color: white;

    padding: 11px 16px;

    border-radius: 8px;

    font-size: 10px;

    opacity: 0;

    pointer-events: none;

    transition: .25s;

    z-index: 2000;
}

.toast.show {
    opacity: 1;

    transform: translateX(-50%) translateY(0);
}


/* RESPONSIVE */

@media (max-width: 1200px) {

    .stats-grid {
        grid-template-columns: repeat(2, 1fr);
    }

    .subjects-grid {
        grid-template-columns: repeat(2, 1fr);
    }

    .week-grid {
        overflow-x: auto;
        grid-template-columns: repeat(5, 220px);
    }

}

@media (max-width: 900px) {

    .sidebar {
        transform: translateX(-100%);
        transition: .25s;
    }

    .sidebar.open {
        transform: translateX(0);
    }

    .main {
        margin-left: 0;
    }

    .mobile-menu {
        display: block;

        border: none;

        background: none;

        color: var(--text);

        font-size: 18px;

        margin-right: 12px;
    }

    .mobile-brand {
        display: block;

        font-size: 14px;

        font-weight: 800;

        margin-right: 15px;
    }

    .search-box {
        flex: 1;

        width: auto;
    }

    .date-display {
        display: none;
    }

    .dashboard-grid {
        grid-template-columns: 1fr;
    }

    .grade-summary,
    .timer-layout,
    .attendance-layout {
        grid-template-columns: 1fr;
    }

}

@media (max-width: 650px) {

    .topbar {
        padding: 0 16px;
    }

    .content {
        padding: 20px 15px;
    }

    .search-box kbd {
        display: none;
    }

    .top-avatar {
        display: none;
    }

    .page-header {
        flex-direction: column;

        align-items: flex-start;

        gap: 15px;
    }

    .stats-grid {
        grid-template-columns: 1fr 1fr;
    }

    .subjects-grid,
    .notes-grid {
        grid-template-columns: 1fr;
    }

    .performance-row {
        grid-template-columns: 34px 1fr 40px;
    }

    .performance-name {
        min-width: 0;
    }

    .mini-progress {
        display: none;
    }

    .task-toolbar {
        align-items: flex-start;

        flex-direction: column;

        gap: 10px;
    }

    .grades-table {
        overflow-x: auto;
    }

    .grade-row {
        min-width: 600px;
    }

    .calendar-days span {
        min-height: 50px;
    }

    .hero-decoration {
        opacity: .4;
    }

    .notification-panel {
        left: 15px;
        right: 15px;

        width: auto;
    }

}

@media (max-width: 450px) {

    .stats-grid {
        grid-template-columns: 1fr;
    }

    .hero h2 {
        font-size: 22px;
    }

    .timer-circle {
        width: 210px;
        height: 210px;
    }

    .timer-inner {
        width: 175px;
        height: 175px;
    }

    .timer-inner span {
        font-size: 40px;
    }

}
