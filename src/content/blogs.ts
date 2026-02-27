import { gemini31ProPost } from "./blogs/gemini-3-1-pro-windsurf"
import { claudeSonnet46Post } from "./blogs/claude-sonnet-4-6-windsurf"
import { glm5MinimaxPost } from "./blogs/glm-5-minimax-m2-5-windsurf"
import { gpt53CodexSparkPost } from "./blogs/gpt-5-3-codex-spark-windsurf"
import { windsurfGithubGuidePost } from "./blogs/windsurf-github-guide"

export { type BlogPost, type BlogSection } from "./blogs/types"

export const blogPosts = [
  windsurfGithubGuidePost,
  gpt53CodexSparkPost,
  glm5MinimaxPost,
  claudeSonnet46Post,
  gemini31ProPost,
]
