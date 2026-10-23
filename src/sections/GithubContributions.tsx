
import { GitHubCalendar } from "react-github-calendar"

const contributionColors = [
  "#ECECEC",
  "#D6D6D6",
  "#B5B5B5",
  "#7A7A7A",
  "#1F1F1F",
]

export default function GithubContributions() {
  return (
    <section
      id="github"
      className="relative scroll-mt-32 border-b border-neutral-200 py-12 sm:py-14"
    >
      {/* Section Label - Left Aligned */}
      <p className="mb-4 font-mono text-xs text-neutral-400 sm:absolute sm:left-0 sm:top-14 sm:mb-0">
        03 / GITHUB
      </p>

      {/* Centered Calendar Container */}
      <div className="overflow-x-auto pb-2">
        <div className="mx-auto w-max font-mono text-xs text-neutral-400">

          {/* GitHub Profile Link */}
          <div className="mb-4 flex justify-end">
            <a
              href="https://github.com/Nandoi"
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-500 transition-colors hover:text-neutral-900"
            >
              @NANDOI ↗
            </a>
          </div>

          {/* Contribution Calendar */}
          <GitHubCalendar
            username="Nandoi"
            year="last"
            colorScheme="light"
            theme={{
              light: contributionColors,
            }}
            blockSize={12}
            blockMargin={3}
            blockRadius={3}
            fontSize={12}
            showMonthLabels={false}
            showWeekdayLabels={false}
            showColorLegend={false}
            showTotalCount={true}
            labels={{
              totalCount:
                "{{count}} CONTRIBUTIONS IN THE LAST YEAR",
            }}
          />

        </div>
      </div>
    </section>
  )
}
