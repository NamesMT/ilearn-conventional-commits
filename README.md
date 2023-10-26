## Conventional Commits
https://www.conventionalcommits.org/en/v1.0.0/

### What is it?
- Conventional Commits is a specification that defines a set of rules for creating commit messages.
- Basically, it defines a mandatory format you must follow when commiting:
  - The first line contains: a mandatory **type**, an *optional* **scope**, and a mandatory **subject/description**.
    - `type: subject`
    - `type(scope): subject`
  - Theres also optional **body** and **footer**s to add more details to the commit message.
    - The body is a more detailed description of the change,
    - The footer is for side and extra informations. [SEE EXAMPLE](https://www.conventionalcommits.org/en/v1.0.0/#commit-message-with-multi-paragraph-body-and-multiple-footers)
    - ```
      type(scope): subject
      
      <BODY>A # Use one linebreak for more paragraphs of BODY
      B
      C

      <FOOTER>X
      
      <FOOTER>fix: #1, #2, #3

      BREAKING CHANGE: # Special footer informs about a breaking change
      ```
- The **type** describes the kind of change that was made
- The *optional* **scope** describes which parts of the codebase was affected
- Lastly, the **subject** is a brief description of the change.
- Examples: 
  - `type(scope): subject`
    - fix(api): authentication endpoint bug
    - feat(login): add forgot password function
    - docs(readme): update installation instructions
    - style(css): update modal button styles
    - chore!: drop support for Node 14
      - Here we could also use the exclamation: '!' before the colon to indicates a BREAKING CHANGE because the subject is self-explained
- Type meanings:
  - feat: feature / enhancement
  - fix: bug fix
  - docs: Documentation-only changes
  - style: Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc)
  - refactor: Changes that neither fixes a bug nor adds a feature
  - perf: Could be considered subtype of `refactor`, performance improvements
  - test: Adding or correcting tests
  - build: Changes that affect the build system or external dependencies (example scopes: gulp, broccoli, npm)
  - ci: Changes to CI configuration files and scripts (example scopes: Gitlab CI, CircleCI, Travis CI)
  - chore: Other changes (most likely not inside of src or test)
  - revert: Reverts previous commit(s)

### Why?
Using Conventional Commits has several benefits:
- Consistency: Conventional Commits is growing in popularity and is used in most starred projects like `vue`, `svelte`, `angular`, even older popular projects like `express`, `axios` has switched commit type to Conventional, which standardized commit message format for consistent history.
- Communication: Make understanding the changes made to the codebase easier for teammates, the public, and other stakeholders.
- Semantic Versioning: Compliant with Semantic Versioning specification.
- Automation: Automated toolings like:
  - semver version auto-bumping
  - generating changelogs and release notes.
- Collaboration: Facilitates collaboration and tracking of changes.
- https://www.conventionalcommits.org/en/v1.0.0/#why-use-conventional-commits

### Recommended Toolings:
- [commitzen (cz)](https://github.com/commitizen/cz-cli)
  - For beginner, it helps making a commit in the Conventional format
  - Optionally, could be used as a git hook to enforce commit message format
- [changelogen](https://github.com/unjs/changelogen)
  - Generate changelog from conventional commit messages

### Tips
- Write neutral mood, concise subject, ie: "add yaml auto-format on save" instead of "added auto-formatting for yaml files on file save"
- Split your commits, don't commit too many changes in one commit and waste time thinkink of a complex way to describe your changes


### **DEMO TIME!!!!!!!!!!**
**Enough words, lets get to action!**
