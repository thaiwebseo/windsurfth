import { gemini31ProPost } from "./blogs/gemini-3-1-pro-windsurf"
import { claudeSonnet46Post } from "./blogs/claude-sonnet-4-6-windsurf"
import { glm5MinimaxPost } from "./blogs/glm-5-minimax-m2-5-windsurf"
import { gpt53CodexSparkPost } from "./blogs/gpt-5-3-codex-spark-windsurf"

export { type BlogPost, type BlogSection } from "./blogs/types"

export const blogPosts = [gemini31ProPost, claudeSonnet46Post, glm5MinimaxPost, gpt53CodexSparkPost]
