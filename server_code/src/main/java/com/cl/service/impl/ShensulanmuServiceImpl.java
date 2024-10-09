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


import com.cl.dao.ShensulanmuDao;
import com.cl.entity.ShensulanmuEntity;
import com.cl.service.ShensulanmuService;
import com.cl.entity.view.ShensulanmuView;

@Service("shensulanmuService")
public class ShensulanmuServiceImpl extends ServiceImpl<ShensulanmuDao, ShensulanmuEntity> implements ShensulanmuService {
	
	
    @Override
    public PageUtils queryPage(Map<String, Object> params) {
        Page<ShensulanmuEntity> page = this.selectPage(
                new Query<ShensulanmuEntity>(params).getPage(),
                new EntityWrapper<ShensulanmuEntity>()
        );
        return new PageUtils(page);
    }
    
    @Override
	public PageUtils queryPage(Map<String, Object> params, Wrapper<ShensulanmuEntity> wrapper) {
		  Page<ShensulanmuView> page =new Query<ShensulanmuView>(params).getPage();
	        page.setRecords(baseMapper.selectListView(page,wrapper));
	    	PageUtils pageUtil = new PageUtils(page);
	    	return pageUtil;
 	}
    
	@Override
	public List<ShensulanmuView> selectListView(Wrapper<ShensulanmuEntity> wrapper) {
		return baseMapper.selectListView(wrapper);
	}

	@Override
	public ShensulanmuView selectView(Wrapper<ShensulanmuEntity> wrapper) {
		return baseMapper.selectView(wrapper);
	}


}
