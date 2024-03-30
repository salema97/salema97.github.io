import * as fs from 'fs'
import * as path from 'path'
import sharp from 'sharp'

function resizeAndConvertToWebP(
	inputFolderPath: string,
	outputFolderPath: string,
	targetWidth: number,
	quality: number
): void {
	fs.readdir(inputFolderPath, (err: NodeJS.ErrnoException | null, files: string[]) => {
		if (err) {
			console.error('Error al leer la carpeta de entrada:', err)
			return
		}

		files.forEach((file) => {
			const inputFilePath = path.join(inputFolderPath, file)
			const outputFilePath = path.join(outputFolderPath, file.replace(/\.[^/.]+$/, '') + '.webp')

			sharp(inputFilePath)
				.resize({ width: targetWidth, withoutEnlargement: true })
				.webp({ quality: quality })
				.toFile(outputFilePath, (err: Error | null, info: sharp.OutputInfo) => {
					if (err) {
						console.error('Error al procesar el archivo:', err)
					} else {
						console.log('Imagen procesada exitosamente:', inputFilePath)
					}
				})
		})
	})
}

const inputFolderPath: string = './scripts/src/images/'
const outputFolderPath: string = './public/images'
const targetWidth: number = 1000 // Ancho deseado, ajusta según tu necesidad

resizeAndConvertToWebP(inputFolderPath, outputFolderPath, targetWidth, 70)
