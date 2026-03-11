"use client"

import { useDictionary } from "@/i18n/Context";
import Template from "../_components/template/template"
import { PROJECT_DESCRIPTOR_WEBGPU } from "../_lib/descriptors";
import { Blog } from "../../_components/blog/blog";
import { List } from "../../_components/list/list";
import { Text } from "../../_components/text/text";
import { Gallery } from "../../_components/gallery/gallery";
import { imPath } from "../_lib/helper";
import TradeOffHeader from "../_components/tradeoff-header/tradeoff-header";

export default function WebgpuEngine() {

	const dico = useDictionary();
	const p = dico.projects.webgpu;
	const pName = "webgpu";

	return (<Template project={PROJECT_DESCRIPTOR_WEBGPU}>

		<Blog.Section>

			<Blog.Group>
				<Blog.Heading>{p.problem.headline}</Blog.Heading>
				<Blog.Paragraph>{p.problem.body}</Blog.Paragraph>
			</Blog.Group>

		</Blog.Section>

		<Blog.Constraints items={p.constraints} />

		<Blog.Section>
			<Blog.Heading>{p.exploration.headline}</Blog.Heading>

			<Blog.Group>
				<Blog.Heading role="H4">{p.exploration.ui_research.headline}</Blog.Heading>
				<Blog.Paragraph>{p.exploration.ui_research.body}</Blog.Paragraph>
				<Gallery.AutoLayout rows={[[imPath(pName, "ui-research")]]} />
			</Blog.Group>

			<Blog.Heading role="H4">{p.exploration.tech_research.headline}</Blog.Heading>

			<Blog.Group direction="ROW">

				<Blog.Group>
					<Blog.Heading role="H5">{p.exploration.tech_research.dod.headline}</Blog.Heading>
					<Blog.Paragraph>{p.exploration.tech_research.dod.body}</Blog.Paragraph>
				</Blog.Group>
				<Gallery.AutoLayout rows={[[imPath(pName, "packet")]]} />
			</Blog.Group>

			<Blog.Group>
				<Blog.Heading role="H5">{p.exploration.tech_research.material.headline}</Blog.Heading>
				<Blog.Paragraph>{p.exploration.tech_research.material.body}</Blog.Paragraph>
				<Gallery.AutoLayout rows={[[imPath(pName, "material"), imPath(pName, "pso")]]} />

			</Blog.Group>

			<Blog.Group>
				<Blog.Heading role="H5">{p.exploration.tech_research.scene_pool.headline}</Blog.Heading>
				<Blog.Paragraph>{p.exploration.tech_research.scene_pool.body}</Blog.Paragraph>
				<Gallery.AutoLayout rows={[[imPath(pName, "scene-pool"), imPath(pName, "ressource-manager")]]} />

			</Blog.Group>

			<Blog.Group direction="ROW">

				<Blog.Group>
					<Blog.Heading role="H5">{p.exploration.tech_research.callback.headline}</Blog.Heading>
					<Blog.Paragraph>{p.exploration.tech_research.callback.body}</Blog.Paragraph>
				</Blog.Group>
				<Gallery.AutoLayout rows={[[imPath(pName, "extended-callback")]]} />
			</Blog.Group>

			<Blog.Group>

				<Gallery.Wrapper>

					<Blog.Group direction="ROW">

						<Blog.Group>
							<Blog.Heading role="H5">{p.exploration.tech_research.mbin.headline}</Blog.Heading>
							<Blog.Paragraph>{p.exploration.tech_research.mbin.body}</Blog.Paragraph>
						</Blog.Group>

						<Gallery.Row>
							<Gallery.Image src={imPath(pName, "loading-object-method")} />
						</Gallery.Row>
					</Blog.Group>
					<Gallery.Row>
						<Gallery.Image src={imPath(pName, "gltf-mbin-snapshot")} />
					</Gallery.Row>
					<Gallery.Row>
						<Gallery.Image src={imPath(pName, "mbin-benchmark-load-time")} />
						<Gallery.Image src={imPath(pName, "mbin-benchmark-file-size")} />
					</Gallery.Row>


				</Gallery.Wrapper>
			</Blog.Group>



			<Blog.Group>

				<Gallery.Wrapper>



					<Blog.Group>
						<Blog.Heading role="H5">{p.exploration.tech_research.ambient.headline}</Blog.Heading>
						<Blog.Paragraph>{p.exploration.tech_research.ambient.body}</ Blog.Paragraph>
					</Blog.Group>

					<Gallery.Row>
						<Gallery.Image src={imPath(pName, "ao")} />
					</Gallery.Row>
					<Gallery.Mosaic images={[
						imPath(pName, "AO-benchmark"),
						imPath(pName, "AO-global-benchmark"),
						imPath(pName, "AO-local-benchmark")]}
					/>

				</Gallery.Wrapper>
			</Blog.Group>

			<Blog.Group>
				<Gallery.Wrapper>
					<Blog.Group direction="ROW">
						<Blog.Group>
							<Blog.Heading role="H5">{p.exploration.tech_research.reflection.headline}</Blog.Heading>
							<Blog.Paragraph>{p.exploration.tech_research.reflection.body}</ Blog.Paragraph>
						</Blog.Group>

						<Gallery.Row>
							<Gallery.Image src={imPath(pName, "reflection-3")} />
						</Gallery.Row>
					</Blog.Group>
					<Gallery.Row>
						<Gallery.Image src={imPath(pName, "reflection-1")} />
						<Gallery.Image src={imPath(pName, "reflection-2")} />
					</Gallery.Row>


				</Gallery.Wrapper>
			</Blog.Group>
		</Blog.Section >

		<Blog.Section>

			<Blog.Heading>{p.solution.headline}</Blog.Heading>

			<Blog.Group>
				<Blog.Heading role="H4">{p.solution.ubo.headline}</Blog.Heading>
				<Blog.Paragraph>{p.solution.ubo.body}</Blog.Paragraph>

				<Gallery.AutoLayout rows={[[
					imPath(pName, "UBO-flow"),
					imPath(pName, "UBO-graph"),
				]]} />
			</Blog.Group>

			<Blog.Group>
				<Blog.Heading role="H4">{p.solution.systems.headline}</Blog.Heading>
				<Blog.Paragraph>{p.solution.systems.body}</Blog.Paragraph>

				<Gallery.AutoLayout rows={[[
					imPath(pName, "core-system-segmentation"),
				]]} />
			</Blog.Group>

			<Blog.Group direction="ROW">
				<Blog.Group>
					<Blog.Heading role="H4">{p.solution.core_split.headline}</Blog.Heading>
					<Blog.Paragraph>{p.solution.core_split.body}</Blog.Paragraph>
				</Blog.Group>

				<Gallery.AutoLayout rows={[[
					imPath(pName, "core-gui-segmentation"),
				]]} />
			</Blog.Group>

			<Blog.Group direction="ROW">
				<Blog.Group>
					<Blog.Heading role="H4">{p.solution.core_split.headline}</Blog.Heading>
					<Blog.Paragraph>{p.solution.core_split.body}</Blog.Paragraph>
				</Blog.Group>

				<Gallery.AutoLayout rows={[[
					imPath(pName, "core-gui-segmentation"),
				]]} />
			</Blog.Group>
		</Blog.Section>

		<Blog.TradeOffs items={p.tradeoffs.map(t => ({ ...t, heading: <TradeOffHeader items={t.heading} /> }))} />

		<Blog.Outcome items={p.outcomes} />
	</Template >);
}
