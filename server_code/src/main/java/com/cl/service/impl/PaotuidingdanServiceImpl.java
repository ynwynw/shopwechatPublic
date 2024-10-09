package com.cl.service.impl;

import org.springframework.stereotype.Service;
import java.util.Map;
import java.util.List;

import com.baomidou.mybatisplus.mapper.Wrapper;
import com.baomidou.mybatisplus.mapper.EntityWrapper;
import com.baomidou.mybatisplus.plugins.Page;
import com.baomidou.mybatisplus.service.impl.ServiceImpl;
import com.cl.utils.PageUtils;
import com.cl.utils.Query;


import com.cl.dao.PaotuidingdanDao;
import com.cl.entity.PaotuidingdanEntity;
import com.cl.service.PaotuidingdanService;
import com.cl.entity.view.PaotuidingdanView;

@Service("paotuidingdanService")
public class PaotuidingdanServiceImpl extends ServiceImpl<PaotuidingdanDao, PaotuidingdanEntity> implements PaotuidingdanService {
	
	
    @Override
    public PageUtils queryPage(Map<String, Object> params) {
        Page<PaotuidingdanEntity> page = this.selectPage(
                new Query<PaotuidingdanEntity>(params).getPage(),
                new EntityWrapper<PaotuidingdanEntity>()
        );
        return new PageUtils(page);
    }
    
    @Override
	public PageUtils queryPage(Map<String, Object> params, Wrapper<PaotuidingdanEntity> wrapper) {
		  Page<PaotuidingdanView> page =new Query<PaotuidingdanView>(params).getPage();
	        page.setRecords(baseMapper.selectListView(page,wrapper));
	    	PageUtils pageUtil = new PageUtils(page);
	    	return pageUtil;
 	}
    
	@Override
	public List<PaotuidingdanView> selectListView(Wrapper<PaotuidingdanEntity> wrapper) {
		return baseMapper.selectListView(wrapper);
	}

	@Override
	public PaotuidingdanView selectView(Wrapper<PaotuidingdanEntity> wrapper) {
		return baseMapper.selectView(wrapper);
	}


}
