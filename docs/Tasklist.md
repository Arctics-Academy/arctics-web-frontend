# Tasklist

List of suggested to-dos written by Sam before proceeding to the next stage of development. Project is not efficiently organized to utilize component-based design, which has hindered development efficiency.

## Before Student Release...

- [x] SAM: Stop booking from proceeding if not selected slot.

- [x] SAM: Add `<title>` tags to each student page.

- [x] SEAN: Missing 開啟會議 buttons. (Opacity rendered incorrectly?)

- [x] SEAN: Fix duplicate cart list items issue.

- [x] SEAN: Handle registration problems if server returns errors.

- [ ] Align `modal`s and `alert()`s. (TBD)

- [ ] Fix React missing `key` prop. (Can be possible problem for not rendering correctly? Figure out transisitons.)

## Must-Do

- [ ] Delete `create-react-app` original files.

- [ ] Swap out alerts for modals.

- [ ] Fix `<a>` tag css handling. Multiple patch used, marked with `/* patch */`.

- [ ] Fix login password form handling.

- [ ] Reorganize file structure
    - [ ] Update `public` folder to corrent contents.
    - [ ] Clean up current structure into `fonts`, `img`, `stylesheets`, `utils`, and `apis`.

- [ ] Necessary documentation
    - [ ] Document site map & potential missing pages.
    - [ ] Update README.md.
    - [ ] Document branch use (by developer or by feature, which seems more correct).
    - [ ] Document design decisions and naming conventions (vague - can skip).

## Before Proceeding Further...

- [ ] `context`
    - [ ] Document context structure / schema (in [ContextStructure.md](./ContextStructure.md)).
    - [ ] Update README.md on how to retreive and set `context`.

- [ ] Components
    - [ ] Generate list of global components instead of rewriting every component every time (in [GlobalComponentList.md](./GlobalComponentList.md)).
    - [ ] Clean up current containers to use the components.

- [ ] Stylesheets
    - [ ] Document all currently used variables.
    - [ ] Clean up into either componenet-based stylesheets or global stylesheets.

- [ ] Software architecture
    - [ ] Unify logic location (components vs. containers).
    - [ ] Unify JSX naming schemes (e.g. component and file name should be named the same way).
    - [ ] Unify CSS naming schemes (e.g. follow BEM or some other organization).
    - [ ] Unit testing!
