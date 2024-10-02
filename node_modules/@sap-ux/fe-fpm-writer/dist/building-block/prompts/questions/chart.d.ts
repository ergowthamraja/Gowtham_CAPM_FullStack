import type { Answers } from 'inquirer';
import type { PromptContext, Prompts } from '../../../prompts/types';
import type { BuildingBlockConfig, Chart } from '../../types';
export type ChartPromptsAnswer = BuildingBlockConfig<Chart> & Answers;
/**
 * Returns a list of prompts required to generate a chart building block.
 *
 * @param context - prompt context including data about project
 * @returns Prompt with questions for chart.
 */
export declare function getChartBuildingBlockPrompts(context: PromptContext): Promise<Prompts<ChartPromptsAnswer>>;
//# sourceMappingURL=chart.d.ts.map