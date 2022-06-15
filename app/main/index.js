import React, {Component, useEffect} from 'react'
import * as d3 from 'd3'
import * as venn from '@upsetjs/venn.js'

const sets = [
	{sets: ['Assist with All ADLs'], size: 100, label: '1000'},
	{sets: ['Bathing'], size: 101, label: '1010'},
	{sets: ['Companionship'], size: 90, label: '494'},
	{sets: ['Assist with All ADLs', 'Bathing'], size: 40, label: '337'},
	{sets: ['Bathing', 'Companionship'], size: 40, label: '829'},
	{sets: ['Companionship', 'Assist with All ADLs'], size: 40, label: '575'},
	{sets: ['Assist with All ADLs', 'Bathing', 'Companionship'], size: 20, label: '356'},
]

const chart = venn.VennDiagram({textFill: '#dff'}).height(640)
class main extends Component {
	VennDiagram(newSets) {
		// const data = venn.layout(sets)
		// const ctx = document.querySelector('canvas').getContext('2d')

		// for (const [i, d] of data.entries()) {
		// 	ctx.fillStyle = `hsla(${(360 * i) / data.length},80%,50%,0.6)`
		// 	ctx.fill(new Path2D(d.path))
		// }

		// ctx.font = '14px Segoe UI'
		// ctx.textAlign = 'center'
		// ctx.textBaseline = 'central'
		// ctx.fillStyle = 'LightSteelblue'
		// ctx.fillText('Chart Title', 300, 12)
		// ctx.font = '12px Helvetica Neue, Helvetica, Arial, sans-serif'
		// ctx.textAlign = 'center'
		// ctx.textBaseline = 'central'
		// ctx.fillStyle = 'white'

		// for (const [i, d] of data.entries()) {
		// 	switch (i) {
		// 		case 1: {
		// 			ctx.fillStyle = 'black'
		// 			ctx.fillText(d.data.sets.toString(), d.text.x - 50, d.text.y)
		// 			break
		// 		}

		// 		case 2: {
		// 			ctx.fillStyle = 'black'
		// 			ctx.fillText(d.data.sets.toString(), d.text.x - 90, d.text.y)
		// 			break
		// 		}

		// 		case 0: {
		// 			ctx.fillStyle = 'black'
		// 			ctx.fillText(d.data.sets.toString(), d.text.x + 120, d.text.y)
		// 			break
		// 		}
		// 		// No default
		// 	}

		// 	ctx.fillStyle = 'white'
		// 	ctx.fillText(d.data.label.toString(), d.text.x, d.text.y)
		// }
		const chartTitle = 'This is chart title'
		d3.select('#venn').append('p').text(chartTitle)
		const div = d3.select('#venn').datum(sets)
		const layout = chart(div)
		// const textCentres = layout.textCentres
		d3.select('#venn').datum(sets).call(chart)
		div.selectAll('.label').style('fill', 'white')
		div.selectAll('.venn-circle path').style('fill-opacity', 0.6)

		// add new sublabels (growing from middle)
		// layout.nodes.each((d, i) => {
		// 	let chartWidth = 0
		// 	let chartHeight = 0
		// 	let display = 'block'
		// 	switch (i) {
		// 		case 0: {
		// 			chartWidth = chart.width() - chart.width() / 3
		// 			chartHeight = chart.height() / 2
		// 			display = 'block'
		// 			break
		// 		}

		// 		case 1: {
		// 			chartWidth = chart.width()
		// 			chartHeight = chart.height() / 4
		// 			display = 'block'
		// 			break
		// 		}

		// 		case 2: {
		// 			chartHeight = chart.height() / 2
		// 			chartWidth = chart.width() * 2 - 130
		// 			display = 'block'
		// 			break
		// 		}

		// 		default:
		// 			display = 'none'
		// 		// No default
		// 	}

		// 	d3.select('#venn')
		// 		.append('text')
		// 		.attr('id', `text${i}`)
		// 		.attr('class', 'sublabel')
		// 		.text(d.sets[0])
		// 		.style('color', 'red')
		// 		.style('display', display)
		// 		.style('position', 'fixed')
		// 		.style('font-size', '14px')
		// 		.style('left', chartWidth + 'px')
		// 		.style('top', chartHeight + 'px')
		// 		.attr('text-anchor', 'middle')
		// 		.attr('dy', '0')
		// 		.attr('x', chart.width() / 2)
		// 		.attr('y', chart.height() / 2)
		// })
		// layout.enter
		// 	.append('text')
		// 	.attr('class', 'sublabel')
		// 	.text(function (d) {
		// 		return d.sets[0]
		// 	})
		// 	.style('fill', 'black')
		// 	.style('font-size', '10px')
		// 	.attr('text-anchor', 'middle')
		// 	.attr('dy', '0')
		// 	.attr('x', chart.width() / 2)
		// 	.attr('y', chart.height() / 2)

		// move existing
		// layout.update
		// 	.selectAll('.sublabel')
		// 	.filter(function (d) {
		// 		return d.sets in textCentres
		// 	})
		// 	.text(function (d) {
		// 		console.log('d: %o', d)
		// 		return 'size ' + d.sets[0]
		// 	})
		// 	.style('font-size', '10px')
		// 	.attr('dy', '18')
		// 	.attr('x', function (d) {
		// 		return Math.floor(textCentres[d.sets].x)
		// 	})
		// 	.attr('y', function (d) {
		// 		return Math.floor(textCentres[d.sets].y)
		// 	})

		// remove old (shrinking to middle)
		// layout.exit
		// 	.select('.sublabel')
		// 	.attr('dy', '0')
		// 	.attr('x', chart.width() / 2)
		// 	.attr('y', chart.height() / 2)
		// 	.style('font-size', '0px')

		return layout
	}

	componentDidMount() {
		this.VennDiagram(sets.slice(0, 1))
		// add/remove set areas to showcase transitions
	}

	render() {
		return <div id="venn" className="venn" />
	}
}
export default main
