/*
 * MIT License
 *
 * Copyright (c) 2024 naijun0403
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

import { RequestClient } from "../request";
import { PromiseLike } from '../asynchronous';
import { Template } from '../template';

export class KakaoShareClient {

    private sharerClient = new RequestClient('https://sharer.kakao.com');

    private isInited = false;

    init(cookies: Record<string, string>, domain: string) {
        this.isInited = true;
        this.sharerClient.setCookies(cookies);
    }

    sendLink(room: string, template: Template, type: SendType = 'default'): PromiseLike<boolean> {
        return new PromiseLike<boolean>((resolve, reject) => {
            this.checkInit();
        });
    }

    private checkInit() {
        if (!this.isInited) throw new Error('KakaoShareClient is not initialized');
    }

}

export type SendType = 'custom' | 'default'